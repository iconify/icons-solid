import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhwcmabhk.css';

const viewBox = {"width":26,"height":24};
const content = `<path class="rhwcmabhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:equalizer"} {...others} />);
}

export default Component;
