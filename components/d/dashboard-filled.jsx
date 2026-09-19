import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y21lb_bbw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="y21lb_bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dashboard-filled"} {...others} />);
}

export default Component;
