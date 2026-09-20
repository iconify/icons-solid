import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hih4jobet.css';
import '../../css/o/ol7rlubzf.css';
import '../../css/g/g9kckfbaa.css';
import '../../css/v/vh6fzdb5l.css';
import '../../css/y/yms05ub2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hih4jobet"/><path class="ol7rlubzf"/><path class="g9kckfbaa"/><path class="vh6fzdb5l"/><path class="yms05ub2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:badge-favorite-heart-2"} {...others} />);
}

export default Component;
