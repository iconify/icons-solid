import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/f/fazkyybfe.css';
import '../../css/x/xynm-9trs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="fazkyybfe"/><path class="xynm-9trs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-cool-48"} {...others} />);
}

export default Component;
