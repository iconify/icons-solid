import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bcy9hon0d.css';
import '../../css/e/etn6etlwz.css';
import '../../css/h/h-79xibwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="bcy9hon0d"/><path class="etn6etlwz"/><path class="h-79xibwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:equipment-gym-02"} {...others} />);
}

export default Component;
