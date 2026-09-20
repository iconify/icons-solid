import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzfz1zb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzfz1zb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skirt-linear"} {...others} />);
}

export default Component;
