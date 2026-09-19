import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqcu16-ig.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cqcu16-ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:readthedocs-wordmark"} {...others} />);
}

export default Component;
