import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbwv04xai.css';
import '../../css/y/yeg2qbbsb.css';
import '../../css/j/jjk3i6btk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dbwv04xai"/><path class="yeg2qbbsb"/><path class="jjk3i6btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-roll-bold"} {...others} />);
}

export default Component;
