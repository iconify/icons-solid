import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xona1pb7d.css';
import '../../css/c/cnes96yjo.css';
import '../../css/o/oe0sopmij.css';
import '../../css/b/b1vrjkb0q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xona1pb7d"/><path class="cnes96yjo"/><path class="oe0sopmij"/><path class="b1vrjkb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-terminal-48-bold"} {...others} />);
}

export default Component;
