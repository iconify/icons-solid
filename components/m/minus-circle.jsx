import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csr1j5bxk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="csr1j5bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:minus-circle"} {...others} />);
}

export default Component;
