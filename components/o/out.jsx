import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o27r778ow.css';
import '../../css/i/iq9a7xo1u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o27r778ow"/><path class="iq9a7xo1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:out"} {...others} />);
}

export default Component;
