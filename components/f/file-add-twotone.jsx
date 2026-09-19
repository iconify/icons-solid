import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7mk-dp-h.css';
import '../../css/j/jso3jy2en.css';
import '../../css/n/n5rxf3buq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="t7mk-dp-h"/><path class="jso3jy2en"/><path class="n5rxf3buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-add-twotone"} {...others} />);
}

export default Component;
