import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flvfhbxkj.css';
import '../../css/e/epd7hgbik.css';
import '../../css/i/iw_3o3g9q.css';
import '../../css/d/dq1tynbis.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="flvfhbxkj"/><path class="epd7hgbik"/><path class="iw_3o3g9q"/><path class="dq1tynbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:small-wind-turbine-20-bold"} {...others} />);
}

export default Component;
