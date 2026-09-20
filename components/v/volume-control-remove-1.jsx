import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e70_ucc7p.css';
import '../../css/b/b5w_lt51s.css';
import '../../css/i/i48rykbbr.css';
import '../../css/g/gi8umibxg.css';
import '../../css/o/ogphb7bhs.css';
import '../../css/j/j6fopibqq.css';
import '../../css/g/gs3xxdbit.css';
import '../../css/b/bae9ku3kp.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path class="e70_ucc7p"/><path class="b5w_lt51s"/><path class="i48rykbbr"/><path class="gi8umibxg"/><path class="ogphb7bhs"/><path class="j6fopibqq"/><path class="gs3xxdbit"/><path class="bae9ku3kp"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:volume-control-remove-1"} {...others} />);
}

export default Component;
