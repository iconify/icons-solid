import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a99zx0bqt.css';
import '../../css/v/v5yukqbyo.css';
import '../../css/q/qt427xrph.css';
import '../../css/d/d70o3mbef.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a99zx0bqt"/><path class="v5yukqbyo"/><path class="qt427xrph"/><path class="d70o3mbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-well-48-bold"} {...others} />);
}

export default Component;
