import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1_0f7bzo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a1_0f7bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:resize-h"} {...others} />);
}

export default Component;
