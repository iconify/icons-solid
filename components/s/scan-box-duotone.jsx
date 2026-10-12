import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syqhj5bsw.css';
import '../../css/e/eoiplfbya.css';
import '../../css/s/s2pgtxb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="syqhj5bsw"/><path class="eoiplfbya"/><path class="s2pgtxb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scan-box-duotone"} {...others} />);
}

export default Component;
