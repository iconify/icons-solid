import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5iu4rbll.css';
import '../../css/z/z57q13bno.css';
import '../../css/j/j2idvactg.css';
import '../../css/j/j3fdcvr3n.css';
import '../../css/j/janj6ibbn.css';
import '../../css/u/utxvowain.css';
import '../../css/c/c9xel8bmx.css';
import '../../css/b/bp-jr6bjx.css';
import '../../css/y/y4aia1b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c5iu4rbll wm-shadow"/><path class="wm-shadow z57q13bno"/><path class="j2idvactg"/><path class="j3fdcvr3n"/><path class="janj6ibbn"/><path class="utxvowain"/><path class="c9xel8bmx wm-shine"/><path class="bp-jr6bjx wm-shine"/><path class="y4aia1b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:arrow-down"} {...others} />);
}

export default Component;
