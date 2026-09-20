import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxtalvbjv.css';
import '../../css/p/pha69hbql.css';
import '../../css/p/pyja8r4ou.css';
import '../../css/y/yl5rnhgwk.css';
import '../../css/p/p2okerbfd.css';
import '../../css/e/eadftebgw.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g paint-order="stroke fill markers" class="uxtalvbjv"><path class="pha69hbql"/><path class="pyja8r4ou"/></g><path class="yl5rnhgwk"/><path paint-order="stroke fill markers" class="p2okerbfd"/><path paint-order="stroke fill markers" class="eadftebgw"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:star-of-david"} {...others} />);
}

export default Component;
