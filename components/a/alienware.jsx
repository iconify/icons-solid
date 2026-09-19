import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daw-5ibwz.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="daw-5ibwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alienware"} {...others} />);
}

export default Component;
