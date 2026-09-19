import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/er7mpaceb.css';
import '../../css/y/y_1iqhbrl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="er7mpaceb"/><circle class="y_1iqhbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:map-pin"} {...others} />);
}

export default Component;
