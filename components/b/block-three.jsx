import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/czxm18bbc.css';
import '../../css/t/ttmeqib-o.css';
import '../../css/c/cpev57b9n.css';
import '../../css/g/ghzm-wbvl.css';
import '../../css/t/twit_bb2y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="czxm18bbc"/><path class="ttmeqib-o"/><path class="cpev57b9n"/><path class="ghzm-wbvl"/><path class="twit_bb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-three"} {...others} />);
}

export default Component;
