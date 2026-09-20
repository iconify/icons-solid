import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpbop_bst.css';
import '../../css/v/v45il3brl.css';
import '../../css/g/gtfx4rboy.css';
import '../../css/p/p8_r6o34d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zpbop_bst"/><path class="v45il3brl"/><path class="gtfx4rboy"/><path class="p8_r6o34d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:insurance-hand-1"} {...others} />);
}

export default Component;
