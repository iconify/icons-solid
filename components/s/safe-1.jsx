import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/h/hp6e_pmvl.css';
import '../../css/l/l8-uzrbbi.css';
import '../../css/j/j4ujoubjx.css';
import '../../css/q/q_-r3hndv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="hp6e_pmvl"/><path class="l8-uzrbbi"/><path class="j4ujoubjx"/><path class="q_-r3hndv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:safe-1"} {...others} />);
}

export default Component;
