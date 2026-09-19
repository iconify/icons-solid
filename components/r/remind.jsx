import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvbiv5ecy.css';
import '../../css/n/nkd99mgmf.css';
import '../../css/o/olxh2rbbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cvbiv5ecy"/><path class="nkd99mgmf"/><path class="olxh2rbbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:remind"} {...others} />);
}

export default Component;
