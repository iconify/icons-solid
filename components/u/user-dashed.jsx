import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3jzujlrk.css';
import '../../css/e/evm8hfb2r.css';
import '../../css/l/l0_6z9ble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c3jzujlrk"/><path class="evm8hfb2r"/><path class="l0_6z9ble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-dashed"} {...others} />);
}

export default Component;
