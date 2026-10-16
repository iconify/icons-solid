import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0oa-qzdz.css';
import '../../css/g/gzddk7wua.css';
import '../../css/t/t8lmebu_d.css';
import '../../css/y/y_1sw4g7z.css';
import '../../css/m/m_uiu3dyi.css';
import '../../css/g/g7q8ghzlz.css';
import '../../css/b/bq9p3bwgo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0oa-qzdz"/><path class="gzddk7wua"/><path class="t8lmebu_d"/><path class="y_1sw4g7z"/><path class="m_uiu3dyi"/><path class="g7q8ghzlz"/><path class="bq9p3bwgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aperture-20-bold"} {...others} />);
}

export default Component;
