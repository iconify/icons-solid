import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t24hzt7cl.css';
import '../../css/j/jel44xajw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t24hzt7cl"/><path class="jel44xajw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:link"} {...others} />);
}

export default Component;
