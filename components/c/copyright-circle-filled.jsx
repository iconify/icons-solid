import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_v3zxy6v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x_v3zxy6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:copyright-circle-filled"} {...others} />);
}

export default Component;
