import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uffnt__ct.css';
import '../../css/b/bnp175jkk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="uffnt__ct"/><path class="bnp175jkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:office-worker"} {...others} />);
}

export default Component;
