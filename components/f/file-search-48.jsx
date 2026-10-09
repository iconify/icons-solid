import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkov0acma.css';
import '../../css/z/z9g7v-2tg.css';
import '../../css/d/dexi_790w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gkov0acma"/><path class="z9g7v-2tg"/><path class="dexi_790w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-search-48"} {...others} />);
}

export default Component;
