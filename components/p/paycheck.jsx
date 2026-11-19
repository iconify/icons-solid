import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz3wt3bus.css';
import '../../css/k/kj0pvozbg.css';
import '../../css/g/g8mfzkbax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iz3wt3bus"/><path class="kj0pvozbg"/><path class="g8mfzkbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paycheck"} {...others} />);
}

export default Component;
