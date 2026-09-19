import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwk5x-bsm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jwk5x-bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:jetbrains"} {...others} />);
}

export default Component;
