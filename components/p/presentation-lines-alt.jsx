import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-e6s_xyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-e6s_xyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:presentation-lines-alt"} {...others} />);
}

export default Component;
