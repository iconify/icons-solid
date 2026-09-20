import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mj1i6js7i.css';
import '../../css/e/em8goyshd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="mj1i6js7i"/><path class="em8goyshd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:swatch-book-sharp"} {...others} />);
}

export default Component;
