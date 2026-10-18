import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw96d85ov.css';
import '../../css/i/i1_yy39iv.css';
import '../../css/a/agaffo5ho.css';
import '../../css/p/pmviisk7a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aw96d85ov"/><path class="i1_yy39iv"/><path class="agaffo5ho"/><path class="pmviisk7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-water-20-bold"} {...others} />);
}

export default Component;
