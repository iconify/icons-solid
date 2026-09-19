import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwaa64zik.css';
import '../../css/y/yv_brepse.css';
import '../../css/r/rykla9wen.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="uwaa64zik"/><path class="yv_brepse"/><path class="rykla9wen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:left-circle-twotone"} {...others} />);
}

export default Component;
