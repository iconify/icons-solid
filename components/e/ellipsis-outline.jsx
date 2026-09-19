import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kgoe69b6c.css';
import '../../css/i/iu5_1fbyz.css';
import '../../css/e/enlxepbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="kgoe69b6c"/><circle class="iu5_1fbyz"/><circle class="enlxepbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:ellipsis-outline"} {...others} />);
}

export default Component;
