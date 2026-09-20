import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b84ui104o.css';
import '../../css/w/wcbu4acoh.css';
import '../../css/y/y--cdmb_c.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="b84ui104o"/><path class="wcbu4acoh"/><path class="y--cdmb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:ultrasound"} {...others} />);
}

export default Component;
