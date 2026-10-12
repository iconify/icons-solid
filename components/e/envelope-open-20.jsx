import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnati2tjw.css';
import '../../css/j/junk1jcyl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rnati2tjw"/><path class="junk1jcyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:envelope-open-20"} {...others} />);
}

export default Component;
