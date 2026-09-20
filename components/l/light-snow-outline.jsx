import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-opy4b1l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z-opy4b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:light-snow-outline"} {...others} />);
}

export default Component;
