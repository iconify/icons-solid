import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pekzi00tw.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="pekzi00tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:ninja"} {...others} />);
}

export default Component;
