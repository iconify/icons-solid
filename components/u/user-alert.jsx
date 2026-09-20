import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rh_082klz.css';
import '../../css/y/y-gps9pxm.css';
import '../../css/t/tbfusvbiq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="rh_082klz"/><path class="y-gps9pxm"/><path class="tbfusvbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:user-alert"} {...others} />);
}

export default Component;
