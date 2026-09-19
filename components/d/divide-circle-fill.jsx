import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxo2_4bha.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="uxo2_4bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:divide-circle-fill"} {...others} />);
}

export default Component;
