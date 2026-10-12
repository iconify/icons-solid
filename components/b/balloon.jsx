import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti_hxxb2l.css';
import '../../css/w/wti81nbmb.css';
import '../../css/k/kgz6fkdro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ti_hxxb2l"/><path class="wti81nbmb"/><path class="kgz6fkdro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:balloon"} {...others} />);
}

export default Component;
