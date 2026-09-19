import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b1667kbkd.css';
import '../../css/w/websu8mzr.css';
import '../../css/x/x3xw6n-2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b1667kbkd"/><path class="websu8mzr"/><path class="x3xw6n-2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:billiard-02"} {...others} />);
}

export default Component;
