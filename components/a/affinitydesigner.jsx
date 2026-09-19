import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0srfgb4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e0srfgb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:affinitydesigner"} {...others} />);
}

export default Component;
