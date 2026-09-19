import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze0oxb4me.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="ze0oxb4me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:4-square"} {...others} />);
}

export default Component;
