import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3_ihpb5f.css';
import '../../css/d/d3xqtkb1l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e3_ihpb5f"/><path class="d3xqtkb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-cw-20-bold"} {...others} />);
}

export default Component;
