import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/ss6oambzz.css';
import '../../css/k/kc4nf4b5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ss6oambzz"/><path class="kc4nf4b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:printer"} {...others} />);
}

export default Component;
