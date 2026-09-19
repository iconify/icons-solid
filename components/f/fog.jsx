import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr7vsjalr.css';
import '../../css/s/s0goipb0f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qr7vsjalr"/><rect class="s0goipb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:fog"} {...others} />);
}

export default Component;
