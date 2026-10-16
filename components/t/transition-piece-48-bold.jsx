import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfoz5gb8g.css';
import '../../css/l/lndetpb3x.css';
import '../../css/o/ous0wrp5f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfoz5gb8g"/><path class="lndetpb3x"/><path class="ous0wrp5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transition-piece-48-bold"} {...others} />);
}

export default Component;
