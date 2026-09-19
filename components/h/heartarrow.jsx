import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9tdqxbog.css';
import '../../css/x/xu78x0bzx.css';
import '../../css/w/wyq5_pmvv.css';
import '../../css/b/bucljsrcf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q9tdqxbog"/><path class="xu78x0bzx"/><path class="wyq5_pmvv"/><path class="bucljsrcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heartarrow"} {...others} />);
}

export default Component;
