import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f-71bdcop.css';
import '../../css/p/pqby8lb2j.css';
import '../../css/g/gdtb-qb5o.css';
import '../../css/p/pmhiyvfve.css';
import '../../css/g/g-shhqb1n.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="f-71bdcop"/><path class="pqby8lb2j"/><path class="gdtb-qb5o"/><path class="pmhiyvfve"/><path class="g-shhqb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:wf"} {...others} />);
}

export default Component;
