import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxzshjbvd.css';
import '../../css/p/pd4mgccgx.css';
import '../../css/o/oqp24fb-j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lxzshjbvd"/><path class="pd4mgccgx"/><path class="oqp24fb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cube"} {...others} />);
}

export default Component;
