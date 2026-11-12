import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv1wov0db.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pv1wov0db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:deepseek-wordmark"} {...others} />);
}

export default Component;
