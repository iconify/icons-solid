import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf-1w2b_n.css';
import '../../css/l/lsy2hwxsm.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGIRhXtcEG" class="jf-1w2b_n"/></defs><use href="#SVGIRhXtcEG" class="lsy2hwxsm"/><use href="#SVGIRhXtcEG" class="ij2x_72vy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:counterclockwise-arrows-button"} {...others} />);
}

export default Component;
