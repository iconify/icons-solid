import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdlxyvhkd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mdlxyvhkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:face-laugh-squint"} {...others} />);
}

export default Component;
