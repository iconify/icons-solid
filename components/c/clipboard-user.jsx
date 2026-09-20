import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm9ywsb4k.css';
import '../../css/n/ntb6s4b4f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lm9ywsb4k"/><path class="ntb6s4b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:clipboard-user"} {...others} />);
}

export default Component;
