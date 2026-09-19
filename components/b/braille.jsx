import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5-8qbbxc.css';

const viewBox = {"width":2176,"height":1408};
const content = `<path class="q5-8qbbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:braille"} {...others} />);
}

export default Component;
