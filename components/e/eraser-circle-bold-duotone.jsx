import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdvcwidb.css';
import '../../css/v/vsmrr13db.css';
import '../../css/c/ch40nbb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdvcwidb"/><path class="vsmrr13db"/><path class="ch40nbb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eraser-circle-bold-duotone"} {...others} />);
}

export default Component;
