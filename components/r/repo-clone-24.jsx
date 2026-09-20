import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw6bhtqns.css';
import '../../css/s/sfw4e80bn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw6bhtqns"/><path class="sfw4e80bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-clone-24"} {...others} />);
}

export default Component;
