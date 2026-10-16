import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kimfu9q5t.css';
import '../../css/d/df3qvvanp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kimfu9q5t"/><path class="df3qvvanp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-warning-20"} {...others} />);
}

export default Component;
