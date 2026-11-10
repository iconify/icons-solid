import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4tv6lb5f.css';
import '../../css/c/chiy8bbjq.css';
import '../../css/s/sgxoqfbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a4tv6lb5f"/><path class="chiy8bbjq"/><path class="sgxoqfbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-laptop-in"} {...others} />);
}

export default Component;
