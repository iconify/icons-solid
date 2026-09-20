import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/py99o21wd.css';
import '../../css/v/vbbzsbc0t.css';
import '../../css/z/zyzap34-z.css';
import '../../css/i/i9-1odb3k.css';
import '../../css/j/jox9tccbc.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="py99o21wd"/><circle class="vbbzsbc0t"/><path class="zyzap34-z"/><path class="i9-1odb3k"/><path class="jox9tccbc"/><path class="n787bfb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-minimalistic-broken"} {...others} />);
}

export default Component;
