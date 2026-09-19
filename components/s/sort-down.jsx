import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu2_l9r9r.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="gu2_l9r9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:sort-down"} {...others} />);
}

export default Component;
