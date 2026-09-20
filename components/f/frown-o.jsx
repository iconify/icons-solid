import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd_9zuben.css';
import '../../css/r/rt-ts4bjr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vd_9zuben"/><path class="rt-ts4bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:frown-o"} {...others} />);
}

export default Component;
