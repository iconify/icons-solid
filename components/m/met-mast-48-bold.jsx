import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnyb1hbmp.css';
import '../../css/y/yh_jzue5r.css';
import '../../css/a/afh_lob9l.css';
import '../../css/y/yd64m07av.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lnyb1hbmp"/><path class="yh_jzue5r"/><path class="afh_lob9l"/><path class="yd64m07av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:met-mast-48-bold"} {...others} />);
}

export default Component;
