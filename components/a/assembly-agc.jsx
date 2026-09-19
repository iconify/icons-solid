import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dux5jwkjy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dux5jwkjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:assembly-agc"} {...others} />);
}

export default Component;
