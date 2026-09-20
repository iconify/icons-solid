import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/iajjr2bhi.css';
import '../../css/o/o_yvu8b5f.css';
import '../../css/p/p5e1ahb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="iajjr2bhi"/><path class="o_yvu8b5f"/><path class="p5e1ahb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:window-tabs-1"} {...others} />);
}

export default Component;
