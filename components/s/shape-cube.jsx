import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evx03bxnb.css';
import '../../css/e/e049mxbai.css';
import '../../css/j/j7_b1jb5m.css';
import '../../css/v/vv7ap8byw.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path class="evx03bxnb"/><path class="e049mxbai"/><path class="j7_b1jb5m"/><path class="vv7ap8byw"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shape-cube"} {...others} />);
}

export default Component;
