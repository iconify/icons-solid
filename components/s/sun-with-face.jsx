import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npcnnqygr.css';
import '../../css/y/y657y2b9g.css';
import '../../css/y/yaksh6b1a.css';
import '../../css/b/bjuc6qztz.css';
import '../../css/m/m1b6egb1z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="npcnnqygr"/><path class="y657y2b9g"/><circle class="yaksh6b1a"/><circle class="bjuc6qztz"/><path class="m1b6egb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sun-with-face"} {...others} />);
}

export default Component;
