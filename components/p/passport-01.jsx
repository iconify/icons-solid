import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xjteduebb.css';
import '../../css/c/c33kuacuf.css';
import '../../css/s/speitbbsv.css';
import '../../css/s/sm4-w3bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xjteduebb"/><path class="c33kuacuf"/><path class="speitbbsv"/><path class="sm4-w3bgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:passport-01"} {...others} />);
}

export default Component;
