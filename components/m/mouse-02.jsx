import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z7ckrwbnn.css';
import '../../css/l/l3ix8-b0t.css';
import '../../css/z/zg5fcjbls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z7ckrwbnn"/><path class="l3ix8-b0t"/><path class="zg5fcjbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-02"} {...others} />);
}

export default Component;
