import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln-hxshjc.css';
import '../../css/e/egi_o9bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ln-hxshjc"/><path class="egi_o9bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-check-outline"} {...others} />);
}

export default Component;
