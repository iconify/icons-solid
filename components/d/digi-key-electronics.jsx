import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7vi-tn5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7vi-tn5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:digi-key-electronics"} {...others} />);
}

export default Component;
