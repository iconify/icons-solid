import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9-0loj0c.css';
import '../../css/c/cl9-c2b3g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9-0loj0c"/><path class="cl9-c2b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-yellow"} {...others} />);
}

export default Component;
