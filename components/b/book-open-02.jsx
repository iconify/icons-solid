import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jmqlc0bwa.css';
import '../../css/z/zqfdxybuy.css';
import '../../css/c/c3kjldbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="jmqlc0bwa"/><path class="zqfdxybuy"/><path class="c3kjldbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-open-02"} {...others} />);
}

export default Component;
