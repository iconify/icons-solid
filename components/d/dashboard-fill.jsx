import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9gxq5xmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9gxq5xmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dashboard-fill"} {...others} />);
}

export default Component;
