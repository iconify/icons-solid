import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvbubjb1v.css';
import '../../css/m/mh-rg_bsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvbubjb1v"/><path class="mh-rg_bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:phone-incoming"} {...others} />);
}

export default Component;
