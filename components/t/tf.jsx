import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/t/tznoqhb6c.css';
import '../../css/c/cxq4kfq9u.css';
import '../../css/p/pmhiyvfve.css';
import '../../css/e/ehimqb6hc.css';
import '../../css/w/wl1q5kwyx.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="tznoqhb6c"/><path class="cxq4kfq9u"/><path class="pmhiyvfve"/><path class="ehimqb6hc"/><path class="wl1q5kwyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tf"} {...others} />);
}

export default Component;
