import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypux_xb_v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ypux_xb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:carry-out-outline"} {...others} />);
}

export default Component;
