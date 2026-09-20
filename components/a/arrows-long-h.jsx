import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd9qbabfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jd9qbabfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:arrows-long-h"} {...others} />);
}

export default Component;
