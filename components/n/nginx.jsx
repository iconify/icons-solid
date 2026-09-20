import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv3ktebxk.css';
import '../../css/e/eq1ur8_nd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mv3ktebxk"/><path class="eq1ur8_nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nginx"} {...others} />);
}

export default Component;
