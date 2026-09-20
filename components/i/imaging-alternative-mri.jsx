import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhnxvf8sx.css';
import '../../css/b/br4kpx8po.css';
import '../../css/w/wnu_u707u.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="mhnxvf8sx"/><path class="br4kpx8po"/><path class="wnu_u707u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:imaging-alternative-mri"} {...others} />);
}

export default Component;
