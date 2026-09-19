import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/v/v0gj4fhgi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="v0gj4fhgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:info-circle-outlined"} {...others} />);
}

export default Component;
