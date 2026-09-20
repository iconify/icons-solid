import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0hmkxdku.css';
import '../../css/x/x3768wg5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0hmkxdku"/><path class="x3768wg5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:octoface-24"} {...others} />);
}

export default Component;
