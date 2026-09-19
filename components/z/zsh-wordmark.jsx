import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0omkob4z.css';
import '../../css/q/qx5t5kjwy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m0omkob4z"/><path class="qx5t5kjwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:zsh-wordmark"} {...others} />);
}

export default Component;
