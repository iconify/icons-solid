import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd53c6jcb.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="hd53c6jcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:chevron-left-compact"} {...others} />);
}

export default Component;
