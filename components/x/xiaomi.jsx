import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri9w4fyml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri9w4fyml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xiaomi"} {...others} />);
}

export default Component;
