import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epcjm8b4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="epcjm8b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:marker"} {...others} />);
}

export default Component;
