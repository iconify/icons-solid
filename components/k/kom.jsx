import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl0rasbub.css';
import '../../css/v/vv-u_2-tu.css';
import '../../css/z/zmprxsbfz.css';
import '../../css/t/t-ih6nm7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bl0rasbub"/><path class="vv-u_2-tu"/><path class="zmprxsbfz"/><path class="t-ih6nm7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kom"} {...others} />);
}

export default Component;
