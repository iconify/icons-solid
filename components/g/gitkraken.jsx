import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtiz8krcv.css';

const viewBox = {"width":592,"height":512};
const content = `<path class="dtiz8krcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:gitkraken"} {...others} />);
}

export default Component;
