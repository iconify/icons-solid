import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjm6t_b4m.css';

const viewBox = {"width":256,"height":274};
const content = `<path clip-rule="evenodd" class="tjm6t_b4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:datadog"} {...others} />);
}

export default Component;
