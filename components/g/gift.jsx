import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kersmsb5m.css';
import '../../css/n/nne76r2us.css';
import '../../css/k/kug4hbc3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kersmsb5m"/><path class="nne76r2us"/><path class="kug4hbc3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:gift"} {...others} />);
}

export default Component;
