import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqhk41b5v.css';

const viewBox = {"width":2112,"height":1792};
const content = `<path class="zqhk41b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:ravelry"} {...others} />);
}

export default Component;
