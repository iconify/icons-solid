import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycsa12osl.css';
import '../../css/n/n3hic-b0a.css';
import '../../css/u/u7oebpbpx.css';
import '../../css/s/sxc6tccln.css';
import '../../css/e/egjqshbmq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ycsa12osl"/><path class="n3hic-b0a"/><circle class="u7oebpbpx"/><circle class="sxc6tccln"/><circle class="egjqshbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pizza-outline"} {...others} />);
}

export default Component;
