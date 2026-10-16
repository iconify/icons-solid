import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5n3t9bfx.css';
import '../../css/b/btyzzq5no.css';
import '../../css/c/cac_93bho.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s5n3t9bfx"/><path class="btyzzq5no"/><path class="cac_93bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tailings-dam-20-bold"} {...others} />);
}

export default Component;
