import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/f/fxwnb7vgp.css';
import '../../css/e/ewng3_bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="bopi9b9jn"/><circle class="h_tsn8bxt"/><circle class="fxwnb7vgp"/><path class="ewng3_bdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waypoints"} {...others} />);
}

export default Component;
