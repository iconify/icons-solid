import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azssgq8vo.css';
import '../../css/e/et6eiabwh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="azssgq8vo"/><path class="et6eiabwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-electric-48"} {...others} />);
}

export default Component;
