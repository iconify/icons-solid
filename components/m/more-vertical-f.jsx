import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k96jtib1q.css';

const viewBox = {"width":24,"height":24,"left":-9,"top":-2};
const content = `<path class="k96jtib1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:more-vertical-f"} {...others} />);
}

export default Component;
