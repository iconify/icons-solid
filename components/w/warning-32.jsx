import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo8189bjo.css';
import '../../css/v/v0h1tybbc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uo8189bjo"/><path clip-rule="evenodd" class="v0h1tybbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:warning-32"} {...others} />);
}

export default Component;
