import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxbs21b9m.css';
import '../../css/g/gnczw122q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zxbs21b9m"/><path class="gnczw122q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microwave-48"} {...others} />);
}

export default Component;
