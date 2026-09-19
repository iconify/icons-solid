import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s9yau7bfv.css';
import '../../css/a/aiajx7ljo.css';
import '../../css/v/vh49_8btg.css';
import '../../css/r/rle50jbed.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="s9yau7bfv"/><path class="aiajx7ljo"/><path class="vh49_8btg"/><path class="rle50jbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stock-market"} {...others} />);
}

export default Component;
