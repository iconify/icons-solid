import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om0ku_p7k.css';
import '../../css/q/qcq6r3btc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="om0ku_p7k"/><path class="qcq6r3btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:envelope-paper-document"} {...others} />);
}

export default Component;
