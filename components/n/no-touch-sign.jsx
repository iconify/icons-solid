import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vx21_pbol.css';
import '../../css/z/zz9utabca.css';
import '../../css/s/s1mixob7h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="vx21_pbol"/><path class="zz9utabca"/><path class="s1mixob7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:no-touch-sign"} {...others} />);
}

export default Component;
