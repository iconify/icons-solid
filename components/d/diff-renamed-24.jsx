import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m46eym3cb.css';
import '../../css/i/i-yovpx2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m46eym3cb"/><path class="i-yovpx2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:diff-renamed-24"} {...others} />);
}

export default Component;
