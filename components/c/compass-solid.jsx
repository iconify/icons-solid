import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y63y_obeb.css';
import '../../css/i/ixud4xmsj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y63y_obeb"/><path clip-rule="evenodd" class="ixud4xmsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:compass-solid"} {...others} />);
}

export default Component;
