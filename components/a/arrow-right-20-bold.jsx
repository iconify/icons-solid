import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgy1l_tlx.css';
import '../../css/n/nx7dqhb3m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hgy1l_tlx"/><path class="nx7dqhb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-20-bold"} {...others} />);
}

export default Component;
