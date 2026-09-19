import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxo6dbb2z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zxo6dbb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:refresh-left"} {...others} />);
}

export default Component;
