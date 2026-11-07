import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x9qq19fwj.css';
import '../../css/o/oy0yg19qw.css';
import '../../css/n/n09gebbpm.css';
import '../../css/y/y8zlfsl7g.css';
import '../../css/m/m49h4_eiq.css';
import '../../css/j/j61xww1jd.css';
import '../../css/l/le9iyfafr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x9qq19fwj"/><path class="oy0yg19qw"/><path class="n09gebbpm"/><path class="y8zlfsl7g"/><path class="m49h4_eiq"/><path class="j61xww1jd"/><path class="le9iyfafr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:toolbox-linear"} {...others} />);
}

export default Component;
