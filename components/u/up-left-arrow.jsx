import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7amu7_fh.css';
import '../../css/f/ftfoyqbcw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h7amu7_fh"/><path class="ftfoyqbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-left-arrow"} {...others} />);
}

export default Component;
