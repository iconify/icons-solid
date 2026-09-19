import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-a9cubfv.css';
import '../../css/b/bh3jo8buu.css';
import '../../css/b/bqx68zbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-a9cubfv"/><path class="bh3jo8buu"/><path class="bqx68zbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:fingerprint-filled"} {...others} />);
}

export default Component;
