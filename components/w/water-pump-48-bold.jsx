import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1hsx4bjq.css';
import '../../css/b/ba5ch9b8o.css';
import '../../css/o/ojfi_o56o.css';
import '../../css/i/i407nx6mb.css';
import '../../css/r/r9vj829ou.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f1hsx4bjq"/><path class="ba5ch9b8o"/><path class="ojfi_o56o"/><path class="i407nx6mb"/><path class="r9vj829ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-pump-48-bold"} {...others} />);
}

export default Component;
