import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbybcrbbp.css';
import '../../css/o/olr0j3b3v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bbybcrbbp"/><path class="olr0j3b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-20"} {...others} />);
}

export default Component;
