import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa_eonbcs.css';
import '../../css/b/bby0x9blr.css';
import '../../css/w/w6oy07-mg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xa_eonbcs"/><path class="bby0x9blr"/><path class="w6oy07-mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:check"} {...others} />);
}

export default Component;
