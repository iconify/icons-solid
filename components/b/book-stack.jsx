import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p514r1kdi.css';
import '../../css/w/we76hrb5m.css';
import '../../css/b/br-iwyzus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p514r1kdi"/><path class="we76hrb5m"/><path class="br-iwyzus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-stack"} {...others} />);
}

export default Component;
