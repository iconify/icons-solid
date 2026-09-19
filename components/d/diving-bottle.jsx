import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u4sexs81j.css';
import '../../css/o/o79o6ib8v.css';
import '../../css/m/mg0dmqb6d.css';
import '../../css/t/tbxfsnbba.css';
import '../../css/j/j4_ztwboi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="u4sexs81j"/><path class="o79o6ib8v"/><rect class="mg0dmqb6d"/><rect class="tbxfsnbba"/><path class="j4_ztwboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:diving-bottle"} {...others} />);
}

export default Component;
