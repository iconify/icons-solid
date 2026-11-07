import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnmrc62nm.css';
import '../../css/z/zy_e48yuc.css';
import '../../css/c/c5psv0bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vnmrc62nm"/><path class="zy_e48yuc"/><path class="c5psv0bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-charge-bold-duotone"} {...others} />);
}

export default Component;
