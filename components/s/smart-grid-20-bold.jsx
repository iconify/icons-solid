import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvggvrfgt.css';
import '../../css/x/x3yktye3k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvggvrfgt"/><path class="x3yktye3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-grid-20-bold"} {...others} />);
}

export default Component;
