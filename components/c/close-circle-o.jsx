import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quuc_sk-g.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="quuc_sk-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:close-circle-o"} {...others} />);
}

export default Component;
