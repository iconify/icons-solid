import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if8mcmoqt.css';
import '../../css/v/vg7y_5p_t.css';
import '../../css/l/ljujyrycr.css';
import '../../css/z/zs0zvublp.css';
import '../../css/k/kru71j6rb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="if8mcmoqt"/><path class="vg7y_5p_t"/><path class="ljujyrycr"/><path class="zs0zvublp"/><path class="kru71j6rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-locker"} {...others} />);
}

export default Component;
