import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxkr6syzc.css';
import '../../css/o/o64mo7bjq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pxkr6syzc"/><path class="o64mo7bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-maximum"} {...others} />);
}

export default Component;
