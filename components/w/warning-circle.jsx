import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ige_o2b4i.css';
import '../../css/z/zadph0bfk.css';
import '../../css/s/s_waxubii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ige_o2b4i"/><path class="zadph0bfk"/><path class="s_waxubii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warning-circle"} {...others} />);
}

export default Component;
