import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwj8e1b9z.css';
import '../../css/i/i6isr1r7r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bwj8e1b9z"/><path class="i6isr1r7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:doctor"} {...others} />);
}

export default Component;
