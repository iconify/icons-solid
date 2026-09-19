import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h__5z1bbd.css';
import '../../css/s/s2rt5pbav.css';
import '../../css/z/zv3nb1bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h__5z1bbd"/><path class="s2rt5pbav"/><path class="zv3nb1bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:backpack-filled"} {...others} />);
}

export default Component;
