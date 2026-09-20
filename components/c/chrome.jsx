import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9nj1-bpg.css';
import '../../css/z/znrlbq9xw.css';
import '../../css/p/padkusb7b.css';
import '../../css/t/tlr6z7bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9nj1-bpg"/><path class="znrlbq9xw"/><path class="padkusb7b"/><path class="tlr6z7bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:chrome"} {...others} />);
}

export default Component;
