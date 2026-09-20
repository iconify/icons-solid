import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lquupobmq.css';
import '../../css/p/pln5qlbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lquupobmq"/><path class="pln5qlbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:ellipses-horizontal-circle"} {...others} />);
}

export default Component;
