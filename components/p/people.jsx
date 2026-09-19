import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/h/hy_bunouy.css';
import '../../css/k/k36ojmfhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="hy_bunouy"/><path class="k36ojmfhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people"} {...others} />);
}

export default Component;
