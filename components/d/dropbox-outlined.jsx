import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh1d9-p_k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xh1d9-p_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dropbox-outlined"} {...others} />);
}

export default Component;
