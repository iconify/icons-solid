import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d28nq_1xp.css';
import '../../css/m/mwlmu5b9e.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGmDobbeyg"><path clip-rule="evenodd" class="d28nq_1xp"/><path class="mwlmu5b9e"/></mask></defs><path mask="url(#SVGmDobbeyg)" class="w49j0rbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:chair-filled"} {...others} />);
}

export default Component;
