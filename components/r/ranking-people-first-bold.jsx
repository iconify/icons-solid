import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cinn_rb7o.css';
import '../../css/e/eqib9ab7h.css';
import '../../css/e/emg1d3bru.css';
import '../../css/c/cujes7b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cinn_rb7o"/><path class="eqib9ab7h"/><path class="emg1d3bru"/><path class="cujes7b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ranking-people-first-bold"} {...others} />);
}

export default Component;
