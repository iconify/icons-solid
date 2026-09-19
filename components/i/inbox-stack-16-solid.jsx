import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/had4r1bdj.css';
import '../../css/w/wjz6iob6a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="had4r1bdj"/><path class="wjz6iob6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:inbox-stack-16-solid"} {...others} />);
}

export default Component;
