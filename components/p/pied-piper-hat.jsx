import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayfm4mbch.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ayfm4mbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:pied-piper-hat"} {...others} />);
}

export default Component;
