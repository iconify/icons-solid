import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdhez3b_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdhez3b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:menu-alt-05"} {...others} />);
}

export default Component;
