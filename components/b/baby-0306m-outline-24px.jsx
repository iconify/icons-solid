import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fagdp1b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fagdp1b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-0306m-outline-24px"} {...others} />);
}

export default Component;
