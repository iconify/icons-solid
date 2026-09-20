import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txxwnozyd.css';
import '../../css/j/j5s8mp-8u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="txxwnozyd"/><path class="j5s8mp-8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:movie"} {...others} />);
}

export default Component;
