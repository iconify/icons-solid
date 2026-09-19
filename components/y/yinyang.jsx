import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysb-1jbwr.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="ysb-1jbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:yinyang"} {...others} />);
}

export default Component;
