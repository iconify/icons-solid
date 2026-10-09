import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddstmrebw.css';
import '../../css/x/xjh2b-bdp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ddstmrebw"/><path class="xjh2b-bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-medium-48"} {...others} />);
}

export default Component;
