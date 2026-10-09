import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_695na3e.css';
import '../../css/b/b3-608noy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k_695na3e"/><path class="b3-608noy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-island-20-bold"} {...others} />);
}

export default Component;
