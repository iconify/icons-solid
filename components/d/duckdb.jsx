import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkkcrdbzx.css';
import '../../css/z/zkseeuhgc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dkkcrdbzx"/><path class="st0 zkseeuhgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:duckdb"} {...others} />);
}

export default Component;
