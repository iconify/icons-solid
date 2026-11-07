import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkklelgka.css';
import '../../css/l/lc21qzuqt.css';
import '../../css/v/v-gsn_r9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dkklelgka"/><path class="lc21qzuqt"/><path class="v-gsn_r9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-bold-duotone"} {...others} />);
}

export default Component;
