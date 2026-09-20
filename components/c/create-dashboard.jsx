import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb-o2tbop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb-o2tbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:create-dashboard"} {...others} />);
}

export default Component;
