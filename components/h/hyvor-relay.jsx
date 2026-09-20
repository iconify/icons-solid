import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_1rlqbxe.css';
import '../../css/f/f14y7dbyr.css';
import '../../css/k/ktwj2bcgu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k_1rlqbxe"/><path class="f14y7dbyr"/><path class="ktwj2bcgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyvor-relay"} {...others} />);
}

export default Component;
