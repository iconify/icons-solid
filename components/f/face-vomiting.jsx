import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/m/m0wodmeth.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b5h4wgblb.css';
import '../../css/y/yaxh6xbhq.css';
import '../../css/j/jfebrr_wi.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="m0wodmeth"/><g class="ij2x_72vy"><path class="b5h4wgblb"/><path class="yaxh6xbhq"/><path class="jfebrr_wi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-vomiting"} {...others} />);
}

export default Component;
