import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy8db6b8d.css';
import '../../css/k/kch4ro44n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xy8db6b8d"/><path class="kch4ro44n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-wallet-dark"} {...others} />);
}

export default Component;
