import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkwgcubuy.css';
import '../../css/o/ostcmkorl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kkwgcubuy"/><path class="ostcmkorl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-firewall"} {...others} />);
}

export default Component;
