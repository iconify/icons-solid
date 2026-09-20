import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cymmyqb3s.css';
import '../../css/f/f0d5hoc7t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cymmyqb3s"/><path class="f0d5hoc7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:play-button"} {...others} />);
}

export default Component;
