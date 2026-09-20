import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/awj5_wbfc.css';
import '../../css/s/sajlr8bmq.css';
import '../../css/i/il6lmcvkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="awj5_wbfc"/><path class="sajlr8bmq"/><path class="il6lmcvkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:signal-square"} {...others} />);
}

export default Component;
