import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1mc4j4if.css';
import '../../css/h/hg6am7bho.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g1mc4j4if"/><path class="hg6am7bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-glasses-3d"} {...others} />);
}

export default Component;
