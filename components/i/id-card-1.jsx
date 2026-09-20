import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kq9gesbhh.css';
import '../../css/s/stw43fbtj.css';
import '../../css/w/wspo6ub-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="kq9gesbhh"/><path class="stw43fbtj"/><path class="wspo6ub-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:id-card-1"} {...others} />);
}

export default Component;
