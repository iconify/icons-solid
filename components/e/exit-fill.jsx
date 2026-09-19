import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk5xc535u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vk5xc535u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:exit-fill"} {...others} />);
}

export default Component;
