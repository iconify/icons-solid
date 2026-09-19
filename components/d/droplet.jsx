import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgb63nblv.css';
import '../../css/b/btx5mjbxt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pgb63nblv"/><path class="btx5mjbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:droplet"} {...others} />);
}

export default Component;
