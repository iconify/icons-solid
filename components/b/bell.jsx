import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx0ku_hzf.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="lx0ku_hzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bell"} {...others} />);
}

export default Component;
