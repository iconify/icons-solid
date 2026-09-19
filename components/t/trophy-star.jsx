import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfu-amb1j.css';
import '../../css/l/lrbukw_4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfu-amb1j"/><path class="lrbukw_4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:trophy-star"} {...others} />);
}

export default Component;
