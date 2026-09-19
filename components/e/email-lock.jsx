import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/x/xm56qfbnf.css';
import '../../css/u/uvat00bcy.css';
import '../../css/z/zjuanibik.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="xm56qfbnf"/><rect class="uvat00bcy"/><path class="zjuanibik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:email-lock"} {...others} />);
}

export default Component;
