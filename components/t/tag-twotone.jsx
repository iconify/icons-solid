import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyu3op__j.css';
import '../../css/j/j37e0x93k.css';
import '../../css/q/qeni9rbnv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iyu3op__j"/><path class="j37e0x93k"/><path class="qeni9rbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:tag-twotone"} {...others} />);
}

export default Component;
