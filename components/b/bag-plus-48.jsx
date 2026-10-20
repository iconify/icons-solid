import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb2gho-_w.css';
import '../../css/e/e6f488wbx.css';
import '../../css/c/c4_zttl1w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cb2gho-_w"/><path class="e6f488wbx"/><path class="c4_zttl1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-plus-48"} {...others} />);
}

export default Component;
