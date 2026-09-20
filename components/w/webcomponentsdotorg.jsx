import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suw6_ccmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suw6_ccmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:webcomponentsdotorg"} {...others} />);
}

export default Component;
