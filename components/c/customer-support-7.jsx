import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7wny9bqn.css';
import '../../css/m/my98_rssl.css';
import '../../css/i/iklyi5b-w.css';
import '../../css/s/s8r4xzfnl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a7wny9bqn"/><path class="my98_rssl"/><path class="iklyi5b-w"/><path class="s8r4xzfnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:customer-support-7"} {...others} />);
}

export default Component;
