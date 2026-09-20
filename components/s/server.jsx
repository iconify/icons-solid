import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vyglt7bor.css';
import '../../css/u/u056v814h.css';
import '../../css/n/nuy3tow1s.css';
import '../../css/q/qz30_3b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="vyglt7bor"/><path class="u056v814h"/><path class="nuy3tow1s"/><path class="qz30_3b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:server"} {...others} />);
}

export default Component;
