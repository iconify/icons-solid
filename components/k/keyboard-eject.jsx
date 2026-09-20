import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzxcsm_ro.css';
import '../../css/x/x5kf7jppd.css';
import '../../css/k/kcboqsb5t.css';
import '../../css/c/chf-19bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kzxcsm_ro"/><path class="x5kf7jppd"/><path class="kcboqsb5t"/><path class="chf-19bnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:keyboard-eject"} {...others} />);
}

export default Component;
