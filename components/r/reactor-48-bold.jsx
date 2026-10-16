import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu57r0fpa.css';
import '../../css/b/by5oxcb_w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iu57r0fpa"/><path class="by5oxcb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reactor-48-bold"} {...others} />);
}

export default Component;
