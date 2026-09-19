import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhl50ubkh.css';
import '../../css/s/s05wzqbji.css';
import '../../css/t/ti-1rqbya.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nhl50ubkh"/><path class="s05wzqbji"/><path class="ti-1rqbya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hocho"} {...others} />);
}

export default Component;
