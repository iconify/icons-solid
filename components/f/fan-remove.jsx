import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k55_vi-il.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k55_vi-il"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fan-remove"} {...others} />);
}

export default Component;
