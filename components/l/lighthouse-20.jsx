import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oku0v98jv.css';
import '../../css/l/l93gu5f2n.css';
import '../../css/o/o23se-ntx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oku0v98jv"/><path class="l93gu5f2n"/><path class="o23se-ntx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lighthouse-20"} {...others} />);
}

export default Component;
