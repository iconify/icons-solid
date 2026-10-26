import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyctcdb5v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xyctcdb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:acupuncture-1-outline"} {...others} />);
}

export default Component;
