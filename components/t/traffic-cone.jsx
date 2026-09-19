import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kryvvdb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kryvvdb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:traffic-cone"} {...others} />);
}

export default Component;
