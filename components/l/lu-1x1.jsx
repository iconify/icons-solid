import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6w7p4bnr.css';
import '../../css/a/aw9rmcz9o.css';
import '../../css/g/g8mz2db_z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u6w7p4bnr"/><path class="aw9rmcz9o"/><path class="g8mz2db_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lu-1x1"} {...others} />);
}

export default Component;
