import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duz33rb7u.css';
import '../../css/l/l2_ygdb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="duz33rb7u"/><path class="l2_ygdb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-bold"} {...others} />);
}

export default Component;
