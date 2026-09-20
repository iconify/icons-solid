import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq7e4ibxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yq7e4ibxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:alarm-off"} {...others} />);
}

export default Component;
