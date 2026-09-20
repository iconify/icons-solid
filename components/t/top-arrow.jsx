import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymz4q6yty.css';
import '../../css/h/hlfwh4b4h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ymz4q6yty"/><path class="hlfwh4b4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:top-arrow"} {...others} />);
}

export default Component;
