import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hto5tzmnn.css';

const viewBox = {"width":482,"height":512};
const content = `<path class="hto5tzmnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:sketchup-stylebuilder"} {...others} />);
}

export default Component;
