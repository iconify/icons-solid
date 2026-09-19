import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd_xjobiw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qd_xjobiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:swap-left-outline"} {...others} />);
}

export default Component;
