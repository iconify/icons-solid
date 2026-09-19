import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu4lnfkov.css';

const viewBox = {"width":431,"height":772};
const content = `<path class="fu4lnfkov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:s-upper-case"} {...others} />);
}

export default Component;
