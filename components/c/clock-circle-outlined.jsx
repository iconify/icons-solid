import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/v/vn3jj0b8a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="vn3jj0b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:clock-circle-outlined"} {...others} />);
}

export default Component;
