import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di53g-bhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="di53g-bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:copy-fill"} {...others} />);
}

export default Component;
