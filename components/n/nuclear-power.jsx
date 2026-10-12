import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cod-6ixtn.css';
import '../../css/h/hpb0czbvv.css';
import '../../css/m/mz1cmkb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cod-6ixtn"/><circle transform="rotate(-120 11.99 12.8)" class="hpb0czbvv"/><path class="mz1cmkb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:nuclear-power"} {...others} />);
}

export default Component;
