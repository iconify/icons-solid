import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md-zvdmwf.css';
import '../../css/z/z-q4y7gho.css';
import '../../css/f/fn20arazz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="md-zvdmwf"/><path class="z-q4y7gho"/><path class="fn20arazz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:dz-1x1"} {...others} />);
}

export default Component;
