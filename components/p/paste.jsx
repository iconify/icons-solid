import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw996hyuo.css';
import '../../css/l/l_qsh6r9b.css';
import '../../css/z/zpssp-omq.css';
import '../../css/e/eikh2e2wu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sw996hyuo"/><path class="l_qsh6r9b"/><rect transform="rotate(-90 6.64 5.59)" class="zpssp-omq"/><path class="eikh2e2wu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paste"} {...others} />);
}

export default Component;
