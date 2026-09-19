import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydtl0dbzz.css';
import '../../css/f/f6mr6abrr.css';
import '../../css/w/wzjiiw0kk.css';
import '../../css/k/ka665cbqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ydtl0dbzz"/><path class="f6mr6abrr"/><path class="wzjiiw0kk"/><path class="ka665cbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sunny"} {...others} />);
}

export default Component;
