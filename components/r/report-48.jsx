import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_z99bhx.css';
import '../../css/r/rmban7b_u.css';
import '../../css/z/zho782gha.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ca_z99bhx"/><path class="rmban7b_u"/><path class="zho782gha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:report-48"} {...others} />);
}

export default Component;
