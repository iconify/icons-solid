import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/k/krf5xhbsy.css';
import '../../css/s/s3s-3kesx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="krf5xhbsy"/><path class="s3s-3kesx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:necktie"} {...others} />);
}

export default Component;
