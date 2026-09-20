import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9zop-zes.css';
import '../../css/u/uo65hxbvl.css';
import '../../css/e/e5n8a42iq.css';
import '../../css/r/rbd9assco.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y9zop-zes"/><path class="uo65hxbvl"/><path class="e5n8a42iq"/><path class="rbd9assco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:galaxy-2"} {...others} />);
}

export default Component;
