import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1g1q-bed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1g1q-bed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:screenshot-fill"} {...others} />);
}

export default Component;
