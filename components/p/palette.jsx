import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6sydbcdf.css';
import '../../css/x/xf81mwtku.css';
import '../../css/x/xyeev7s4v.css';
import '../../css/s/ss47qtbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l6sydbcdf"/><path class="xf81mwtku"/><path class="xyeev7s4v"/><path class="ss47qtbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palette"} {...others} />);
}

export default Component;
