import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rg0j4jfyi.css';
import '../../css/p/p293j12hm.css';
import '../../css/j/jzuskz7tu.css';
import '../../css/q/q1gmn3bbc.css';
import '../../css/q/qrsyn3b8r.css';
import '../../css/h/h6qwmc1yb.css';
import '../../css/n/nqzeb2b6g.css';
import '../../css/h/hn--kkfvq.css';
import '../../css/j/jp4d5nb4o.css';
import '../../css/g/guoy50bqm.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rg0j4jfyi"/><path class="p293j12hm"/><path class="jzuskz7tu"/><path class="q1gmn3bbc"/><path class="qrsyn3b8r"/><path class="h6qwmc1yb"/><path class="nqzeb2b6g"/><path class="hn--kkfvq"/><circle class="jp4d5nb4o"/><circle class="guoy50bqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sz"} {...others} />);
}

export default Component;
