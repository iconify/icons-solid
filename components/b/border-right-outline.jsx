import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_rj89vzf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x_rj89vzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:border-right-outline"} {...others} />);
}

export default Component;
