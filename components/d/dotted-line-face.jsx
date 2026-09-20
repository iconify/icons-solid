import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0xbhesyu.css';
import '../../css/f/fouayebow.css';
import '../../css/s/soumptb5m.css';
import '../../css/w/wzd7dfbhf.css';
import '../../css/k/kef9-snwm.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="d0xbhesyu"/><circle class="fouayebow"/><circle class="soumptb5m"/><path class="wzd7dfbhf"/><path class="kef9-snwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dotted-line-face"} {...others} />);
}

export default Component;
