import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p04ns8zuz.css';
import '../../css/f/fuyxrcc6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p04ns8zuz"/><path class="fuyxrcc6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-vertical-spacing-solid"} {...others} />);
}

export default Component;
