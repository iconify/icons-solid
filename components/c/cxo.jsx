import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcstgtvsf.css';
import '../../css/f/fbb_pv2ys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcstgtvsf"/><path class="fbb_pv2ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cxo"} {...others} />);
}

export default Component;
