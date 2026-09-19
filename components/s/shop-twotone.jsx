import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2h-50wuc.css';
import '../../css/i/imgt2lbqx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d2h-50wuc"/><path class="imgt2lbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:shop-twotone"} {...others} />);
}

export default Component;
