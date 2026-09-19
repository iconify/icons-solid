import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f948t8o3a.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="f948t8o3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:logo-stackoverflow"} {...others} />);
}

export default Component;
