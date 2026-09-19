import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/j/jkdgwhusy.css';
import '../../css/y/y96k8d55x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="jkdgwhusy"/><path class="y96k8d55x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:public-toilet"} {...others} />);
}

export default Component;
