import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av-3gi9ts.css';
import '../../css/n/n57wrcbov.css';
import '../../css/c/c-9z_d0bn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="av-3gi9ts"/><rect class="n57wrcbov"/><path class="c-9z_d0bn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc"} {...others} />);
}

export default Component;
