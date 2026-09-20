import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjliamb6c.css';
import '../../css/t/t0z2kxbdn.css';
import '../../css/f/f9b3hhbya.css';
import '../../css/a/a4p7-tb1i.css';
import '../../css/x/xmqq4hbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kjliamb6c"/><path class="t0z2kxbdn"/><path class="f9b3hhbya"/><path class="a4p7-tb1i"/><path class="xmqq4hbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-double-up"} {...others} />);
}

export default Component;
