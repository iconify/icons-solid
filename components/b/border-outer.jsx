import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lprujtblw.css';
import '../../css/q/q33pllwot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lprujtblw"/><path class="q33pllwot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:border-outer"} {...others} />);
}

export default Component;
