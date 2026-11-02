import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfy6_4lcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfy6_4lcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:amazon-pay-fill"} {...others} />);
}

export default Component;
