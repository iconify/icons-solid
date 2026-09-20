import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmq9zib2l.css';
import '../../css/g/gv3xfmb6k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wmq9zib2l"/><path class="gv3xfmb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:insert"} {...others} />);
}

export default Component;
