import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f65x4gbxw.css';
import '../../css/w/w1jc-qglq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f65x4gbxw"/><path class="w1jc-qglq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:inbox"} {...others} />);
}

export default Component;
