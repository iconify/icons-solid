import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqrtktbvt.css';
import '../../css/r/r2nbzfjyr.css';
import '../../css/z/zo4og5b1o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xqrtktbvt"/><path class="r2nbzfjyr"/><path class="zo4og5b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cave-48-bold"} {...others} />);
}

export default Component;
