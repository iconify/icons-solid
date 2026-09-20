import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_wgvebfg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};
const content = `<path class="g_wgvebfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:vimeo"} {...others} />);
}

export default Component;
