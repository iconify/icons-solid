import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyhpkdsso.css';
import '../../css/x/xf-7ownph.css';
import '../../css/f/fhmm_kygi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyhpkdsso"/><path class="xf-7ownph"/><path class="fhmm_kygi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-horizontal-bold"} {...others} />);
}

export default Component;
