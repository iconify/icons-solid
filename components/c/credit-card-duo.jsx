import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ysdkygkow.css';
import '../../css/l/ldinazb7c.css';
import '../../css/e/ex-7uccti.css';
import '../../css/z/znap07bec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ysdkygkow"/><path class="ldinazb7c wm-a"/><path class="ex-7uccti"/><path class="wm-a znap07bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:credit-card-duo"} {...others} />);
}

export default Component;
