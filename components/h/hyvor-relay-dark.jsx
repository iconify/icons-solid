import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pybrbcb0k.css';
import '../../css/k/ktwj2bcgu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pybrbcb0k"/><path class="ktwj2bcgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyvor-relay-dark"} {...others} />);
}

export default Component;
