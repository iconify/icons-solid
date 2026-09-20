import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/axrtmvakb.css';
import '../../css/s/s5d4nebov.css';
import '../../css/k/kmti6wb1i.css';
import '../../css/p/pgqe0btlt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="axrtmvakb"/><path class="s5d4nebov"/><path class="kmti6wb1i"/><path class="pgqe0btlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:diamond-1"} {...others} />);
}

export default Component;
