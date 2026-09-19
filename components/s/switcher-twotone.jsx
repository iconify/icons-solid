import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pck6pgbpl.css';
import '../../css/v/vh5zprbhd.css';
import '../../css/n/nf8po2uuu.css';
import '../../css/x/x2bo9tb4z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pck6pgbpl"/><path class="vh5zprbhd"/><path class="nf8po2uuu"/><path class="x2bo9tb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:switcher-twotone"} {...others} />);
}

export default Component;
