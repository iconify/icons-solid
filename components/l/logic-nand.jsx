import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bla-5pbit.css';
import '../../css/o/okkq0lbwo.css';
import '../../css/j/jpordbbij.css';
import '../../css/w/w9su38bli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bla-5pbit"/><path class="okkq0lbwo"/><circle class="jpordbbij"/><circle class="w9su38bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:logic-nand"} {...others} />);
}

export default Component;
