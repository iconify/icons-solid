import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmq9zib2l.css';
import '../../css/x/xv3ps-cxi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wmq9zib2l"/><path class="xv3ps-cxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:external-link"} {...others} />);
}

export default Component;
