import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/i9_42sb9z.css';
import '../../css/p/py4b5oben.css';
import '../../css/h/h0o-9681w.css';
import '../../css/z/ziljj0lxt.css';
import '../../css/k/kmpw51zhl.css';
import '../../css/z/zzgdvh3lv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="i9_42sb9z"/><path class="py4b5oben"/><path class="h0o-9681w"/><path class="ziljj0lxt"/><path class="kmpw51zhl"/><path class="zzgdvh3lv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pen-1"} {...others} />);
}

export default Component;
