import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbx7cjb1m.css';
import '../../css/a/a19jmacmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbx7cjb1m"/><path class="a19jmacmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-payment-bills-bold"} {...others} />);
}

export default Component;
