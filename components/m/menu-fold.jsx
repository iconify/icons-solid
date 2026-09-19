import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgi-d2aje.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xgi-d2aje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:menu-fold"} {...others} />);
}

export default Component;
