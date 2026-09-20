import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhp64zbzw.css';
import '../../css/c/cagr_ndqq.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rhp64zbzw"/><path class="cagr_ndqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bus"} {...others} />);
}

export default Component;
