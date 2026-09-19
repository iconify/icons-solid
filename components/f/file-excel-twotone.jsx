import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f85yefe1j.css';
import '../../css/j/jso3jy2en.css';
import '../../css/r/r45tgcbqe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="f85yefe1j"/><path class="jso3jy2en"/><path class="r45tgcbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-excel-twotone"} {...others} />);
}

export default Component;
