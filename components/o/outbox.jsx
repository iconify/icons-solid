import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/intqmzodw.css';
import '../../css/j/jbvtufb0o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="intqmzodw"/><path class="jbvtufb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:outbox"} {...others} />);
}

export default Component;
