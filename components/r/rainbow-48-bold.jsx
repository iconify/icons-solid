import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atfy2eibq.css';
import '../../css/z/zz0oiz_vk.css';
import '../../css/b/b72d3_baj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="atfy2eibq"/><path class="zz0oiz_vk"/><path class="b72d3_baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rainbow-48-bold"} {...others} />);
}

export default Component;
