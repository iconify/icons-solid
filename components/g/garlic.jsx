import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/z0dd1vb_i.css';
import '../../css/x/xbkdkkb6v.css';
import '../../css/m/mm6u_4rcf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="z0dd1vb_i"/><path class="xbkdkkb6v"/><path class="mm6u_4rcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:garlic"} {...others} />);
}

export default Component;
