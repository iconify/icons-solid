import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u_bwfnbeo.css';
import '../../css/f/fnttlk7wa.css';
import '../../css/h/h0mr_w5yi.css';
import '../../css/b/blxgvjbci.css';
import '../../css/d/d9ndedbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="u_bwfnbeo"/><circle class="fnttlk7wa"/><circle class="h0mr_w5yi"/><path class="blxgvjbci"/><path class="d9ndedbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pulley"} {...others} />);
}

export default Component;
