import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2_waf_pe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2_waf_pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:fullscreen-exit-line"} {...others} />);
}

export default Component;
