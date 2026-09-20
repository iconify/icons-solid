import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoq3slb8f.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="uoq3slb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-waxing-gibbous-2"} {...others} />);
}

export default Component;
