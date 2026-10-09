import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhtqqrbcl.css';
import '../../css/g/gdgkf1jwj.css';
import '../../css/w/wu47-njnc.css';
import '../../css/w/w025bmewr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhtqqrbcl"/><path class="gdgkf1jwj"/><path class="wu47-njnc"/><path class="w025bmewr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-48"} {...others} />);
}

export default Component;
