import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwup6hyfp.css';
import '../../css/k/k6p64wbai.css';
import '../../css/l/lchmcxbvc.css';
import '../../css/w/wfm-uqbto.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kwup6hyfp"/><path class="k6p64wbai"/><path class="lchmcxbvc"/><path class="wfm-uqbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-x-20"} {...others} />);
}

export default Component;
