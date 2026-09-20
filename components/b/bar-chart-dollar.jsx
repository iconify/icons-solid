import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_r0tjbwq.css';
import '../../css/d/duhh5kbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_r0tjbwq"/><path clip-rule="evenodd" class="duhh5kbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bar-chart-dollar"} {...others} />);
}

export default Component;
