import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5vdclnqy.css';
import '../../css/o/ot7rdzb2f.css';
import '../../css/b/bdg0p2bxg.css';
import '../../css/l/l_6g95bgy.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="n5vdclnqy"/><path class="ot7rdzb2f"/><path class="bdg0p2bxg"/><path class="l_6g95bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sr-4x3"} {...others} />);
}

export default Component;
