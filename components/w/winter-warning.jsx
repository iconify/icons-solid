import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3_17eb5m.css';
import '../../css/n/nknwp425q.css';
import '../../css/b/bzswhqb2n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w3_17eb5m"/><path class="nknwp425q"/><path class="bzswhqb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:winter-warning"} {...others} />);
}

export default Component;
