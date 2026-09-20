import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp7-0ubcz.css';
import '../../css/l/lxxy901ad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wp7-0ubcz"/><circle class="lxxy901ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:eye"} {...others} />);
}

export default Component;
