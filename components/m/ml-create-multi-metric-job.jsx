import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3-2ppbxq.css';
import '../../css/s/sc7gseb_b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary r3-2ppbxq"/><path class="sc7gseb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-create-multi-metric-job"} {...others} />);
}

export default Component;
