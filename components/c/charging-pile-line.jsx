import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3or0sbuq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3or0sbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:charging-pile-line"} {...others} />);
}

export default Component;
