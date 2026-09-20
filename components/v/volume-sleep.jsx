import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/laso5781b.css';
import '../../css/u/umr8lvcxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="laso5781b"/><path class="umr8lvcxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:volume-sleep"} {...others} />);
}

export default Component;
