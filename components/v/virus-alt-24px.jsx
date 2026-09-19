import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6f0_zbti.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x6f0_zbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:virus-alt-24px"} {...others} />);
}

export default Component;
