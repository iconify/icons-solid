import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emlqstweo.css';
import '../../css/s/s-p22fb2s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="emlqstweo"/><path class="s-p22fb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:processwire-wordmark"} {...others} />);
}

export default Component;
