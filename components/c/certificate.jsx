import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvnfybc2q.css';
import '../../css/t/tv82xdb3v.css';
import '../../css/b/bsjepvbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zvnfybc2q"/><path class="tv82xdb3v"/><path class="bsjepvbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:certificate"} {...others} />);
}

export default Component;
