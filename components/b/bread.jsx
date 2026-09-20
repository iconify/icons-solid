import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oijwsjbpz.css';
import '../../css/k/kslym3yyz.css';
import '../../css/b/bes5-j0mw.css';
import '../../css/t/tuiltublz.css';
import '../../css/v/v-7qtac7f.css';
import '../../css/f/flvm2pq_i.css';
import '../../css/q/q6fyfsb4g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oijwsjbpz"/><path class="kslym3yyz"/><path class="bes5-j0mw"/><path class="tuiltublz"/><path class="v-7qtac7f"/><path class="flvm2pq_i"/><path class="q6fyfsb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:bread"} {...others} />);
}

export default Component;
