import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qetnckbkp.css';
import '../../css/y/yr13g5spn.css';
import '../../css/d/d_cckzeas.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qetnckbkp"/><path class="yr13g5spn"/><path class="d_cckzeas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mountfuji"} {...others} />);
}

export default Component;
