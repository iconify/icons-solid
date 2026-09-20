import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jab7xhb0n.css';
import '../../css/v/vla3-w5tf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jab7xhb0n"/><path class="vla3-w5tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:magento"} {...others} />);
}

export default Component;
