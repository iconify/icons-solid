import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgfp4ebof.css';
import '../../css/i/ipz-bu3ya.css';

const viewBox = {"width":64,"height":55.425};
const content = `<rect class="pgfp4ebof"/><path class="ipz-bu3ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:biomejs"} {...others} />);
}

export default Component;
