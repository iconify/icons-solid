import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za7cltxdg.css';
import '../../css/v/v_my3mlnv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="za7cltxdg"/><path class="v_my3mlnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:banknoteeuro"} {...others} />);
}

export default Component;
