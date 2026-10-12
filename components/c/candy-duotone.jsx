import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_-r70b7z.css';
import '../../css/a/axfcjcbgh.css';
import '../../css/u/ua_sik_-v.css';
import '../../css/p/pfbai9q-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z_-r70b7z"/><path class="axfcjcbgh"/><path class="ua_sik_-v"/><path class="pfbai9q-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:candy-duotone"} {...others} />);
}

export default Component;
