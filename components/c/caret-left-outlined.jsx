import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooj2r_z4l.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ooj2r_z4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:caret-left-outlined"} {...others} />);
}

export default Component;
