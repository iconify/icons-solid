import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd1lu708s.css';
import '../../css/g/gmbi57b8u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sd1lu708s"/><path class="gmbi57b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stackblitz-wordmark"} {...others} />);
}

export default Component;
