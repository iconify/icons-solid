import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adsxb894r.css';
import '../../css/v/vgemnycrm.css';
import '../../css/k/k6hhxwxzv.css';
import '../../css/v/vk9m68ywx.css';
import '../../css/v/viy62pb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="adsxb894r"/><path class="vgemnycrm"/><circle class="k6hhxwxzv"/><circle class="vk9m68ywx"/><circle class="viy62pb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:domino"} {...others} />);
}

export default Component;
