import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d69tjgb7e.css';
import '../../css/w/wskswwbry.css';
import '../../css/t/tkgxa5i2k.css';
import '../../css/o/o7l_lyvqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d69tjgb7e"/><path clip-rule="evenodd" class="wskswwbry"/><path class="tkgxa5i2k"/><path class="o7l_lyvqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-cross-bold"} {...others} />);
}

export default Component;
