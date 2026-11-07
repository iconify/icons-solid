import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjh_qrbin.css';
import '../../css/q/qnadq5bgl.css';
import '../../css/o/o8qapdbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjh_qrbin"/><path class="qnadq5bgl"/><path class="o8qapdbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-high-bold"} {...others} />);
}

export default Component;
