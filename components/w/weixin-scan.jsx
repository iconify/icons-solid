import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/m/my44ckkmr.css';
import '../../css/g/g1pc17epq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="my44ckkmr"/><path class="g1pc17epq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-scan"} {...others} />);
}

export default Component;
