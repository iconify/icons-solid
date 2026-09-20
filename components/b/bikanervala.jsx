import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo07ssopt.css';
import '../../css/l/l19u7itse.css';
import '../../css/p/p5xn_tbck.css';

const viewBox = {"width":1999.5,"height":691.5,"left":0.48,"top":4.5};
const content = `<path class="bo07ssopt"/><path class="l19u7itse"/><path class="p5xn_tbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bikanervala"} {...others} />);
}

export default Component;
