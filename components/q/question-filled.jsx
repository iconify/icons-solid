import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk4lkh9jc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uk4lkh9jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:question-filled"} {...others} />);
}

export default Component;
