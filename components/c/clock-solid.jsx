import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i51od5bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i51od5bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:clock-solid"} {...others} />);
}

export default Component;
