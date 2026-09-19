import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmq29o5uc.css';
import '../../css/r/rm4duzb7g.css';
import '../../css/d/d8dc_abtl.css';
import '../../css/c/cm352lvlu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vmq29o5uc"/><path class="rm4duzb7g"/><path class="d8dc_abtl"/><path class="cm352lvlu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:briefcase"} {...others} />);
}

export default Component;
