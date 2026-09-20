import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5e6vsrrs.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="l5e6vsrrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:man-symbol"} {...others} />);
}

export default Component;
