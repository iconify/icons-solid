import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/n5g9r554c.css';
import '../../css/q/qo7pm-zuq.css';
import '../../css/o/of0i5gpge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="n5g9r554c"/><path class="qo7pm-zuq"/><path class="of0i5gpge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:harddisk-1"} {...others} />);
}

export default Component;
