import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hda2nzbnb.css';
import '../../css/z/zodp_k1_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hda2nzbnb"/><path class="zodp_k1_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spirit-level-48-bold"} {...others} />);
}

export default Component;
