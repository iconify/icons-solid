import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1mxhxbto.css';
import '../../css/y/yx1n2abfm.css';
import '../../css/h/h3f5vhb2p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p1mxhxbto"/><path class="yx1n2abfm"/><path class="h3f5vhb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hex-bolt-48-bold"} {...others} />);
}

export default Component;
