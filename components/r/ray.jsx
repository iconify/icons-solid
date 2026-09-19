import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5muhfx1s.css';
import '../../css/m/md286fbip.css';
import '../../css/z/z2q6q0i8u.css';
import '../../css/h/had8mlbwn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="c5muhfx1s"/><g class="md286fbip"><path class="z2q6q0i8u"/><path class="had8mlbwn"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ray"} {...others} />);
}

export default Component;
