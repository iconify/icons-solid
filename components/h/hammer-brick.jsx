import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igu13zvhn.css';
import '../../css/c/cc95nhbwg.css';
import '../../css/y/ydeutyb7f.css';
import '../../css/s/s3eu2ib-m.css';
import '../../css/b/bz6gjxjqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="igu13zvhn"/><path class="cc95nhbwg"/><path class="ydeutyb7f"/><path clip-rule="evenodd" class="s3eu2ib-m"/><path class="bz6gjxjqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hammer-brick"} {...others} />);
}

export default Component;
