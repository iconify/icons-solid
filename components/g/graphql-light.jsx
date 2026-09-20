import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/z/zuuykpgxq.css';
import '../../css/e/e47mc5ckj.css';
import '../../css/f/fgg_tccmv.css';
import '../../css/m/m97lws0wv.css';
import '../../css/v/vx1gdjbbc.css';
import '../../css/y/yo8eadckq.css';
import '../../css/h/h0-gqe12r.css';
import '../../css/x/xtysr3lxh.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="zuuykpgxq"/><path class="e47mc5ckj"/><path class="fgg_tccmv"/><path class="m97lws0wv"/><path class="vx1gdjbbc"/><path class="yo8eadckq"/><path class="h0-gqe12r"/><path class="xtysr3lxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:graphql-light"} {...others} />);
}

export default Component;
