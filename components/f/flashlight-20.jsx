import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeonhzbov.css';
import '../../css/u/utwwk0b7p.css';
import '../../css/w/wwuvbm56v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zeonhzbov"/><path class="utwwk0b7p"/><path class="wwuvbm56v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flashlight-20"} {...others} />);
}

export default Component;
