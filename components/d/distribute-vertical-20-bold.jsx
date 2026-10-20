import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8n4llp5f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b8n4llp5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribute-vertical-20-bold"} {...others} />);
}

export default Component;
