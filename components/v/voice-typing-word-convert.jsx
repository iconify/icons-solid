import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k3xl1pb3m.css';
import '../../css/v/v35haabhu.css';
import '../../css/w/wq_teud7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="k3xl1pb3m"/><path class="v35haabhu"/><path class="wq_teud7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:voice-typing-word-convert"} {...others} />);
}

export default Component;
