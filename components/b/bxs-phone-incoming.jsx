import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvbubjb1v.css';
import '../../css/p/pj85_iwji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvbubjb1v"/><path class="pj85_iwji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-phone-incoming"} {...others} />);
}

export default Component;
