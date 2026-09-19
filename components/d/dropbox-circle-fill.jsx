import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwc9mxbxm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vwc9mxbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dropbox-circle-fill"} {...others} />);
}

export default Component;
