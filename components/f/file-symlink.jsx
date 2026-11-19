import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7o91l-2l.css';
import '../../css/s/s9-d6cktg.css';
import '../../css/l/lqkrgebwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j7o91l-2l"/><path class="s9-d6cktg"/><path class="lqkrgebwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-symlink"} {...others} />);
}

export default Component;
