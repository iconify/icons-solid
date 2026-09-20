import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nb6j_obdw.css';
import '../../css/s/sy3bihbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><rect class="nb6j_obdw"/><rect class="sy3bihbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stop-light"} {...others} />);
}

export default Component;
