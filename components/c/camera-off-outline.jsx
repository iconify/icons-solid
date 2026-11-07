import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h52hq6b9u.css';
import '../../css/z/z9kgvgb1l.css';
import '../../css/w/wfiv04kcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h52hq6b9u"/><path class="z9kgvgb1l"/><path class="wfiv04kcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-off-outline"} {...others} />);
}

export default Component;
