import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/z/zcicxlhte.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="zcicxlhte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:exclamation"} {...others} />);
}

export default Component;
