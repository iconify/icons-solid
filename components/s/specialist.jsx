import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6f3mn3in.css';
import '../../css/z/zw6fdactm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r6f3mn3in"/><path class="zw6fdactm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:specialist"} {...others} />);
}

export default Component;
