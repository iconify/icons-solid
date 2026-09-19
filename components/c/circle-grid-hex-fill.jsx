import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j26yc11gb.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="j26yc11gb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:circle-grid-hex-fill"} {...others} />);
}

export default Component;
