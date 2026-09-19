import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wfz_u94ru.css';
import '../../css/d/dfknjvb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wfz_u94ru"/><path class="dfknjvb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pen-02"} {...others} />);
}

export default Component;
