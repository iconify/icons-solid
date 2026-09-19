import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a35do_bcy.css';
import '../../css/d/drorme3nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a35do_bcy"/><path class="drorme3nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wind-power-02"} {...others} />);
}

export default Component;
