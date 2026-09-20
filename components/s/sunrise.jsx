import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6vu2n_it.css';
import '../../css/q/qr2jzwbvc.css';
import '../../css/t/tajbw3b6k.css';
import '../../css/m/mmwsdobmn.css';
import '../../css/h/hfz3b8b5m.css';
import '../../css/c/c7ayd-b9a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g6vu2n_it"/><path class="qr2jzwbvc"/><path class="tajbw3b6k"/><path class="mmwsdobmn"/><path class="hfz3b8b5m"/><path class="c7ayd-b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sunrise"} {...others} />);
}

export default Component;
