import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwvq9csdw.css';
import '../../css/f/fllaxj71y.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mwvq9csdw"/><path class="fllaxj71y"/><path class="n35dlibfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:eye-off-duotone"} {...others} />);
}

export default Component;
