import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b96v0mbje.css';
import '../../css/x/xo-h05v-v.css';
import '../../css/q/qyu547bwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="b96v0mbje"/><path class="xo-h05v-v"/><path class="qyu547bwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:recycle-bin"} {...others} />);
}

export default Component;
