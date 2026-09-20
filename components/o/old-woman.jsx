import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx1wgomas.css';
import '../../css/a/awoa3lz-s.css';
import '../../css/e/eqcflcbmp.css';
import '../../css/y/y_8cdl7on.css';
import '../../css/x/xz0pf7boc.css';
import '../../css/g/g3o7nrbxy.css';
import '../../css/g/gt0iigzjr.css';
import '../../css/n/na8vr-bvk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fx1wgomas"/><path class="awoa3lz-s"/><path class="eqcflcbmp"/><path class="y_8cdl7on"/><path class="xz0pf7boc"/><path class="g3o7nrbxy"/><path class="gt0iigzjr"/><path class="na8vr-bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:old-woman"} {...others} />);
}

export default Component;
