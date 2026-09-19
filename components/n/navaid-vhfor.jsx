import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg_ct5bjf.css';
import '../../css/e/es579g_1w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vg_ct5bjf"/><path class="es579g_1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-vhfor"} {...others} />);
}

export default Component;
