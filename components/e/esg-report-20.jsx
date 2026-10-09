import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezhonm73e.css';
import '../../css/v/vck8c0qcs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ezhonm73e"/><path class="vck8c0qcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:esg-report-20"} {...others} />);
}

export default Component;
