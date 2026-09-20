import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v12d60_ju.css';
import '../../css/e/e29tvgbxj.css';
import '../../css/q/qdaqy6blz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v12d60_ju"/><path class="e29tvgbxj"/><path class="qdaqy6blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coolify"} {...others} />);
}

export default Component;
