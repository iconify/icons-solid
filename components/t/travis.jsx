import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxewg8z1p.css';
import '../../css/t/t08ue7k0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxewg8z1p"/><path class="t08ue7k0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:travis"} {...others} />);
}

export default Component;
