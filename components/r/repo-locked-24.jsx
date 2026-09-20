import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwb2ztm3s.css';
import '../../css/s/sz-8khbph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xwb2ztm3s"/><path class="sz-8khbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-locked-24"} {...others} />);
}

export default Component;
