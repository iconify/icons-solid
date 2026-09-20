import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1qdg1bld.css';
import '../../css/s/s519vbn7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k1qdg1bld"/><path class="s519vbn7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:thingiverse"} {...others} />);
}

export default Component;
