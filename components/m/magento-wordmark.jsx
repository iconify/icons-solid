import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9gx0vbsu.css';
import '../../css/k/kphlzacfd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q9gx0vbsu"/><path class="kphlzacfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:magento-wordmark"} {...others} />);
}

export default Component;
