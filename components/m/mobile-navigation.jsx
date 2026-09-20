import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zw5kqcbug.css';
import '../../css/b/bnx1c7bwp.css';
import '../../css/u/uyf81u0ji.css';
import '../../css/l/l4iiu8bqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zw5kqcbug"/><path class="bnx1c7bwp"/><path class="uyf81u0ji"/><path class="l4iiu8bqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mobile-navigation"} {...others} />);
}

export default Component;
