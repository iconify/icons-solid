import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3x1tqwwg.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="f3x1tqwwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:external-link-alt"} {...others} />);
}

export default Component;
