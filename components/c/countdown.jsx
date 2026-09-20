import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sd2-nwbye.css';
import '../../css/l/l-ca2edhw.css';
import '../../css/w/w-lvmjg0i.css';
import '../../css/g/gsbedy41l.css';
import '../../css/a/a26ez0-6d.css';
import '../../css/r/rh90to7ou.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="sd2-nwbye"/><path clip-rule="evenodd" class="l-ca2edhw"/><path class="w-lvmjg0i"/><path clip-rule="evenodd" class="gsbedy41l"/><path clip-rule="evenodd" class="a26ez0-6d"/><path clip-rule="evenodd" class="rh90to7ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:countdown"} {...others} />);
}

export default Component;
