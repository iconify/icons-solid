import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9ewtabjn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="u9ewtabjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:folder-open"} {...others} />);
}

export default Component;
