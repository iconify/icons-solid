import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngl4_3bgm.css';

const viewBox = {"width":432,"height":488};
const content = `<path class="ngl4_3bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:baidu"} {...others} />);
}

export default Component;
