import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/ax90zf6me.css';
import '../../css/q/qo1g4eb5y.css';
import '../../css/z/z19bf84dj.css';
import '../../css/g/gtzky04zb.css';
import '../../css/w/wvu-jdfyc.css';
import '../../css/t/tqmlw6bpz.css';
import '../../css/d/dae5ybcwf.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ax90zf6me"/><path class="qo1g4eb5y"/><path class="z19bf84dj"/><path class="gtzky04zb"/><path class="wvu-jdfyc"/><path class="tqmlw6bpz"/><path class="dae5ybcwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sx"} {...others} />);
}

export default Component;
