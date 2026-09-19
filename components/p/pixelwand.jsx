import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5f5ksbis.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="p5f5ksbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pixelwand"} {...others} />);
}

export default Component;
