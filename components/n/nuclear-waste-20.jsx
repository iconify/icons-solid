import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzgrz9d2f.css';
import '../../css/l/llp7d6wph.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hzgrz9d2f"/><path class="llp7d6wph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-waste-20"} {...others} />);
}

export default Component;
