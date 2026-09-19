import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_3tzc3zp.css';
import '../../css/s/szf5qrbdc.css';
import '../../css/u/ud4iudbrz.css';
import '../../css/y/y3b9nlbqo.css';
import '../../css/m/m47cu8x2g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n_3tzc3zp"/><path class="szf5qrbdc"/><path class="ud4iudbrz"/><path class="y3b9nlbqo"/><path class="m47cu8x2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:novelwriter"} {...others} />);
}

export default Component;
