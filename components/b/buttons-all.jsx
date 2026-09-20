import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/evf6obc2o.css';
import '../../css/b/b0oucibwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="evf6obc2o"/><path class="b0oucibwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:buttons-all"} {...others} />);
}

export default Component;
