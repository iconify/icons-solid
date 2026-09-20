import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1i2_yktj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1i2_yktj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chart-scatter-plot-hexbin"} {...others} />);
}

export default Component;
