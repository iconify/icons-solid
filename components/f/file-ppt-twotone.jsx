import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu3ocmbje.css';
import '../../css/e/eq_93_56q.css';
import '../../css/j/jso3jy2en.css';
import '../../css/a/a7at0s-6k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xu3ocmbje"/><path class="eq_93_56q"/><path class="jso3jy2en"/><path class="a7at0s-6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-ppt-twotone"} {...others} />);
}

export default Component;
