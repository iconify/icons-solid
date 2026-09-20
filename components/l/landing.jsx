import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hj1x9z2yv.css';
import '../../css/p/pdmhq57oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hj1x9z2yv"/><path class="pdmhq57oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:landing"} {...others} />);
}

export default Component;
