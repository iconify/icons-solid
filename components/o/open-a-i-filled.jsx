import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np1z57bvk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="np1z57bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:open-a-i-filled"} {...others} />);
}

export default Component;
