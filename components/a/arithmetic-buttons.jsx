import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/j/jinlz1b9h.css';
import '../../css/s/sqpv4jy4p.css';
import '../../css/k/kbhzw_-cn.css';
import '../../css/b/bc_u0__qw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYi0ZjeZn"><g class="gopnm44um"><path class="jinlz1b9h"/><path class="sqpv4jy4p"/><path class="kbhzw_-cn"/><path class="bc_u0__qw"/></g></mask></defs><path mask="url(#SVGYi0ZjeZn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:arithmetic-buttons"} {...others} />);
}

export default Component;
