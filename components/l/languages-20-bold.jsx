import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4d3-1mti.css';
import '../../css/a/ay8umis1r.css';
import '../../css/o/o49-qrbbn.css';
import '../../css/i/iu_u5m5mq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k4d3-1mti"/><path class="ay8umis1r"/><path class="o49-qrbbn"/><path class="iu_u5m5mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:languages-20-bold"} {...others} />);
}

export default Component;
