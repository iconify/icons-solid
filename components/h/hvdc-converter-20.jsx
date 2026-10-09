import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti48nsbex.css';
import '../../css/a/ar3qzv4of.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ti48nsbex"/><path class="ar3qzv4of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hvdc-converter-20"} {...others} />);
}

export default Component;
