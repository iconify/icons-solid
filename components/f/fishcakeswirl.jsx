import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny2sfabep.css';
import '../../css/n/nnbs2674t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ny2sfabep"/><path class="nnbs2674t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fishcakeswirl"} {...others} />);
}

export default Component;
