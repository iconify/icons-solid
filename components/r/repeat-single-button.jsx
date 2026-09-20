import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8otfzbxq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q8otfzbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:repeat-single-button"} {...others} />);
}

export default Component;
