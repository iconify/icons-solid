import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_auzoz_p.css';
import '../../css/a/a4u_2wblu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_auzoz_p"/><path class="a4u_2wblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-crop"} {...others} />);
}

export default Component;
