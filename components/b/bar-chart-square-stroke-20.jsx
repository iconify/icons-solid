import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlzul8kzr.css';
import '../../css/s/sw83ssb_p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zlzul8kzr"/><path class="sw83ssb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bar-chart-square-stroke-20"} {...others} />);
}

export default Component;
