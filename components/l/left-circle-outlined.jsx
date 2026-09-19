import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rykla9wen.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rykla9wen"/><path class="yv_brepse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:left-circle-outlined"} {...others} />);
}

export default Component;
