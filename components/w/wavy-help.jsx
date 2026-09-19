import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfcvgv5ju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfcvgv5ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:wavy-help"} {...others} />);
}

export default Component;
