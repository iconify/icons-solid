import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wobsqr1mq.css';
import '../../css/p/pw90w5qlp.css';
import '../../css/c/cwa6rzb2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wobsqr1mq"/><path class="pw90w5qlp"/><path class="cwa6rzb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:server"} {...others} />);
}

export default Component;
