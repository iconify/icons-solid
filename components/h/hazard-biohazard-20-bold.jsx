import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcia1ds6l.css';
import '../../css/u/u8ausac2g.css';
import '../../css/x/xufwpsbtx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pcia1ds6l"/><path class="u8ausac2g"/><path class="xufwpsbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-biohazard-20-bold"} {...others} />);
}

export default Component;
