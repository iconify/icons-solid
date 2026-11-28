import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hzz7lbhmb.css';
import '../../css/h/hr56dqbzm.css';
import '../../css/f/f7c_j4b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hzz7lbhmb"/><path class="hr56dqbzm"/><path class="f7c_j4b5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:waves"} {...others} />);
}

export default Component;
