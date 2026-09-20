import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb4dekbxd.css';
import '../../css/r/rq3rv_bun.css';
import '../../css/k/k3szck9dr.css';

const viewBox = {"width":400,"height":400};
const content = `<path class="jb4dekbxd"/><path class="rq3rv_bun"/><path class="k3szck9dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:warp"} {...others} />);
}

export default Component;
