import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztm4cfb3x.css';
import '../../css/r/rx-beboiq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ztm4cfb3x"/><path class="rx-beboiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:whats-app"} {...others} />);
}

export default Component;
