import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m11cagbqy.css';
import '../../css/t/tjmji5h6m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m11cagbqy"/><path class="tjmji5h6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swagger"} {...others} />);
}

export default Component;
