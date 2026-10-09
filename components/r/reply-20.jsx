import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gypgls1dd.css';
import '../../css/e/ems1_nb1x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gypgls1dd"/><path class="ems1_nb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-20"} {...others} />);
}

export default Component;
