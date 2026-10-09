import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k859r6bpa.css';
import '../../css/g/gvso01jpw.css';
import '../../css/k/kezlhjxnr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k859r6bpa"/><path class="gvso01jpw"/><path class="kezlhjxnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:analytics-20"} {...others} />);
}

export default Component;
