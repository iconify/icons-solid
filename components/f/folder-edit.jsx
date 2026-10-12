import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_5fivbtu.css';
import '../../css/s/shwczoibt.css';
import '../../css/s/sr7bhxcfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l_5fivbtu"/><rect transform="rotate(135 7 12.58)scale(-1 1)" class="shwczoibt"/><path class="sr7bhxcfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-edit"} {...others} />);
}

export default Component;
