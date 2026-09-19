import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix46sucxf.css';
import '../../css/b/b8r_gt97w.css';
import '../../css/f/ffi5rls9b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ix46sucxf"/><path class="b8r_gt97w"/><path class="ffi5rls9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:school"} {...others} />);
}

export default Component;
