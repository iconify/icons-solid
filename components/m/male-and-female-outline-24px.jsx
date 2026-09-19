import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v129qbbge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v129qbbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:male-and-female-outline-24px"} {...others} />);
}

export default Component;
