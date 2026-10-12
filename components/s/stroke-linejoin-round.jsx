import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwo2-pbuc.css';
import '../../css/m/mt-o-cafs.css';
import '../../css/u/uwj74xp4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cwo2-pbuc"/><path class="mt-o-cafs"/><path class="uwj74xp4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-linejoin-round"} {...others} />);
}

export default Component;
