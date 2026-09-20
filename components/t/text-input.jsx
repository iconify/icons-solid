import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg419tbbu.css';
import '../../css/k/koi2gi6-m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wg419tbbu"/><path class="koi2gi6-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:text-input"} {...others} />);
}

export default Component;
