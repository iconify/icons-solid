import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tunlaubxi.css';
import '../../css/d/da5se5sef.css';
import '../../css/h/h01ydvy9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tunlaubxi"/><path class="da5se5sef"/><path class="h01ydvy9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ipfs-dark"} {...others} />);
}

export default Component;
