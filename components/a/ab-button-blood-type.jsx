import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxwyqi2jz.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/x/xan4wqb6p.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="fxwyqi2jz"/><path class="in5wtwq8h"/><path class="xan4wqb6p"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ab-button-blood-type"} {...others} />);
}

export default Component;
