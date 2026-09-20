import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_9dqoa7i.css';
import '../../css/m/m8ijo221w.css';
import '../../css/j/jl8d3n4pz.css';
import '../../css/x/xi0e0lzyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m_9dqoa7i"/><path class="m8ijo221w"/><path class="jl8d3n4pz"/><path class="xi0e0lzyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-cart-user-4"} {...others} />);
}

export default Component;
