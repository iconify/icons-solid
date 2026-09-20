import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4pj5jbdc.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/f/f2smzy9kb.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="u4pj5jbdc"/><path class="in5wtwq8h"/><path class="f2smzy9kb"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cl-button"} {...others} />);
}

export default Component;
