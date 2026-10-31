import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/avllke91y.css';
import '../../css/f/fng_racyg.css';
import '../../css/a/aroqmwbre.css';
import '../../css/t/ti2cc1oum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="avllke91y"/><path class="fng_racyg wm-shine"/><path class="aroqmwbre"/><path class="ti2cc1oum wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lamp-desk"} {...others} />);
}

export default Component;
