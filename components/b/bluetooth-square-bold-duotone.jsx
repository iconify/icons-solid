import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn_frcb-c.css';
import '../../css/i/i_cgi-t8l.css';
import '../../css/h/hj4ovvz1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jn_frcb-c"/><path class="i_cgi-t8l"/><path clip-rule="evenodd" class="hj4ovvz1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-square-bold-duotone"} {...others} />);
}

export default Component;
