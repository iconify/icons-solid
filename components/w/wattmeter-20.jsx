import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrs6n7bep.css';
import '../../css/w/w2gzq9yrr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nrs6n7bep"/><path class="w2gzq9yrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wattmeter-20"} {...others} />);
}

export default Component;
