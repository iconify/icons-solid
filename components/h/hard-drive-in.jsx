import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc3nxhbcu.css';
import '../../css/t/tg23tgs8r.css';
import '../../css/n/n21a0m78c.css';
import '../../css/e/ec768tfqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hc3nxhbcu"/><path class="tg23tgs8r"/><path class="n21a0m78c"/><path class="ec768tfqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-drive-in"} {...others} />);
}

export default Component;
