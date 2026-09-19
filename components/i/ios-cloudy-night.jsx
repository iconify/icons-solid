import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s04t-wbch.css';
import '../../css/o/ordjzlbcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s04t-wbch"/><path class="ordjzlbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloudy-night"} {...others} />);
}

export default Component;
