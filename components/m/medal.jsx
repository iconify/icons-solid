import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i99h-_v1d.css';
import '../../css/x/xspkd8upa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i99h-_v1d"/><path class="xspkd8upa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:medal"} {...others} />);
}

export default Component;
