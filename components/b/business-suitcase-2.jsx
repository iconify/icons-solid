import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/q5fx5ibab.css';
import '../../css/n/n7ur55e1b.css';
import '../../css/d/d_0fwiz7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="q5fx5ibab"/><path class="n7ur55e1b"/><path class="d_0fwiz7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-suitcase-2"} {...others} />);
}

export default Component;
