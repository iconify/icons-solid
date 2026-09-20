import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmf4webcc.css';
import '../../css/n/ngr5oebfg.css';
import '../../css/a/a8noj8_gi.css';
import '../../css/g/g38ac68gp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zmf4webcc"/><path class="ngr5oebfg"/><path class="a8noj8_gi"/><path class="g38ac68gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:discopanel-light"} {...others} />);
}

export default Component;
