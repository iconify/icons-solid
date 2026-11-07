import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z58cvdbyi.css';
import '../../css/z/zy_e48yuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z58cvdbyi"/><path class="zy_e48yuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
