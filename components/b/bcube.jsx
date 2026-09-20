import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grfwzfblc.css';
import '../../css/u/uszi3vbgi.css';
import '../../css/j/j3bk5ybiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grfwzfblc"/><path class="uszi3vbgi"/><path clip-rule="evenodd" class="j3bk5ybiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bcube"} {...others} />);
}

export default Component;
