import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahe8wbc_h.css';
import '../../css/i/i0j6qobio.css';
import '../../css/j/j10_cbcvm.css';
import '../../css/i/iuyj0-wdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahe8wbc_h"/><path class="i0j6qobio"/><path class="j10_cbcvm"/><path class="iuyj0-wdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:edu"} {...others} />);
}

export default Component;
