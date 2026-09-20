import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/ykj-wob0o.css';
import '../../css/o/og7xrbchw.css';
import '../../css/t/t82qxkb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ykj-wob0o"/><path class="og7xrbchw"/><path class="t82qxkb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:baggage"} {...others} />);
}

export default Component;
