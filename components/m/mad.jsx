import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/s/s1q8lcb1s.css';
import '../../css/i/ifwem2bpq.css';
import '../../css/x/xuh70gfac.css';
import '../../css/u/un96hmbbz.css';
import '../../css/r/r_oxw7o-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="s1q8lcb1s"/><path class="ifwem2bpq"/><path class="xuh70gfac"/><path class="un96hmbbz"/><path class="r_oxw7o-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:mad"} {...others} />);
}

export default Component;
