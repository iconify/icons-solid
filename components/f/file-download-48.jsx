import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/u/u8wp1qb3l.css';
import '../../css/z/zay6z3bib.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="u8wp1qb3l"/><path class="zay6z3bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-download-48"} {...others} />);
}

export default Component;
