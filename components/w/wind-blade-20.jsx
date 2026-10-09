import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpgzfijku.css';
import '../../css/h/hvaaohf8r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jpgzfijku"/><path class="hvaaohf8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-blade-20"} {...others} />);
}

export default Component;
