import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coivkzecr.css';
import '../../css/u/ukwr40b7t.css';
import '../../css/h/hsryopm_k.css';
import '../../css/z/zc6wdwbae.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="coivkzecr"/><path class="ukwr40b7t"/><path class="hsryopm_k"/><path class="zc6wdwbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-home-20-bold"} {...others} />);
}

export default Component;
