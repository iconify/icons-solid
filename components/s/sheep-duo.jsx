import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfpsheo0q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u3q6p0b6p.css';
import '../../css/r/rju4ki1jr.css';
import '../../css/w/whvag0h5n.css';
import '../../css/k/kkq2fcb-y.css';
import '../../css/d/dwv_ehb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yfpsheo0q"/><g class="dt0cm9dhy primary"><path class="u3q6p0b6p"/><path class="rju4ki1jr"/><path class="whvag0h5n"/><path class="kkq2fcb-y"/><path class="dwv_ehb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sheep-duo"} {...others} />);
}

export default Component;
