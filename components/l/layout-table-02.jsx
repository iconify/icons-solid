import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c06h1db0u.css';
import '../../css/p/ptbssxbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c06h1db0u"/><path class="ptbssxbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layout-table-02"} {...others} />);
}

export default Component;
