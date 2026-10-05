import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q15x4_bbt.css';
import '../../css/p/pc7e7mp-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="q15x4_bbt"/><path class="pc7e7mp-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:terminal"} {...others} />);
}

export default Component;
