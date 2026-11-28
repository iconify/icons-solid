import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1r9_sbni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k1r9_sbni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:stopwatch-check"} {...others} />);
}

export default Component;
