import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8s1habcq.css';
import '../../css/c/c9zv0kbln.css';
import '../../css/b/blx-8dnbn.css';
import '../../css/i/ibjsi_bpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a8s1habcq"/><path class="c9zv0kbln"/><path class="blx-8dnbn"/><path class="ibjsi_bpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-15"} {...others} />);
}

export default Component;
