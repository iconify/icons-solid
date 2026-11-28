import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj83x2bwg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggubv6whl.css';
import '../../css/v/vt6-fiosq.css';
import '../../css/p/p46zpu12j.css';
import '../../css/k/k06lkun7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj83x2bwg secondary"/><g class="dt0cm9dhy primary"><path class="ggubv6whl"/><path class="vt6-fiosq"/><path class="p46zpu12j"/><path class="k06lkun7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spotify-duo"} {...others} />);
}

export default Component;
