import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2l34ybtf.css';
import '../../css/j/j8cdfd2tz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2l34ybtf"/><path class="j8cdfd2tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:biohazard-filled"} {...others} />);
}

export default Component;
