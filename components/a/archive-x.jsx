import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b3uffrbyf.css';
import '../../css/i/ikqnel5yv.css';
import '../../css/l/lc5chy50b.css';
import '../../css/k/kn8q3bbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="b3uffrbyf"/><path class="ikqnel5yv"/><path class="lc5chy50b"/><path class="kn8q3bbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:archive-x"} {...others} />);
}

export default Component;
