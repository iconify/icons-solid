import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj588pbsy.css';
import '../../css/l/l10hz5bmh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mj588pbsy"/><path class="l10hz5bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:traefikproxy-wordmark"} {...others} />);
}

export default Component;
