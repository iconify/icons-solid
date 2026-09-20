import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_avgdczx.css';
import '../../css/k/kc709bcob.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l_avgdczx"/><path class="kc709bcob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:rollupjs-solid"} {...others} />);
}

export default Component;
