import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll22o1baf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ll22o1baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:alipay-circle-outline"} {...others} />);
}

export default Component;
