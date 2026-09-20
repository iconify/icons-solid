import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y49u1nbmf.css';
import '../../css/m/m8-2r70ks.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mwr3xccrq.css';
import '../../css/i/ie-7kriki.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y49u1nbmf"/><path class="m8-2r70ks"/><g class="ij2x_72vy"><path class="mwr3xccrq"/><path class="ie-7kriki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:honey-pot"} {...others} />);
}

export default Component;
