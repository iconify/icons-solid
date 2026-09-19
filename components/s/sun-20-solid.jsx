import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdfm2xl6c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kdfm2xl6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:sun-20-solid"} {...others} />);
}

export default Component;
