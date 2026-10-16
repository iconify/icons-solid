import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykwqglbwb.css';
import '../../css/p/p18co30jw.css';
import '../../css/c/cglx9k6ox.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ykwqglbwb"/><path class="p18co30jw"/><path class="cglx9k6ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-input-20"} {...others} />);
}

export default Component;
