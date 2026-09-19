import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zba5lxb9f.css';
import '../../css/e/e0u3nnbkg.css';
import '../../css/x/xbg8fwbvo.css';
import '../../css/j/jlao-fl0k.css';
import '../../css/r/r720bg59f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zba5lxb9f"/><path class="e0u3nnbkg"/><path class="xbg8fwbvo"/><path class="jlao-fl0k"/><path class="r720bg59f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:picture-twotone"} {...others} />);
}

export default Component;
