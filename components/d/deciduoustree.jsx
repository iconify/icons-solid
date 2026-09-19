import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6yn8gb3f.css';
import '../../css/i/ipg66nb4h.css';
import '../../css/s/syqz6bc1j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q6yn8gb3f"/><path class="ipg66nb4h"/><path class="syqz6bc1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:deciduoustree"} {...others} />);
}

export default Component;
