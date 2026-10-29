import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbf3n1bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbf3n1bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrow-down-z-a"} {...others} />);
}

export default Component;
