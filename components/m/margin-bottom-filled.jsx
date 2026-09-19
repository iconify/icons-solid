import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj3p1-bpn.css';
import '../../css/e/exda4zbzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj3p1-bpn"/><rect class="exda4zbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:margin-bottom-filled"} {...others} />);
}

export default Component;
