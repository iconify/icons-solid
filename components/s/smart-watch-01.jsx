import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v90gbqbox.css';
import '../../css/z/zxm27fb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="v90gbqbox"/><path class="zxm27fb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-watch-01"} {...others} />);
}

export default Component;
