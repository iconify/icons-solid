import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eckid59_t.css';
import '../../css/t/tc-l81vik.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eckid59_t"/><path class="tc-l81vik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-signin-login"} {...others} />);
}

export default Component;
