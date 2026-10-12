import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpfud6box.css';
import '../../css/e/e8h7730wv.css';
import '../../css/g/gjg8u-1-g.css';
import '../../css/m/mvc0g5yje.css';
import '../../css/s/sip7q4xcc.css';
import '../../css/x/x79ryb5tf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qpfud6box"/><path class="e8h7730wv"/><path class="gjg8u-1-g"/><path class="mvc0g5yje"/><path class="sip7q4xcc"/><path class="x79ryb5tf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hop-duotone"} {...others} />);
}

export default Component;
