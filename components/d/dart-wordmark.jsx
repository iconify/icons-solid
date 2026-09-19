import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxgz0fldn.css';
import '../../css/c/cq5b2q68g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pxgz0fldn"/><path class="cq5b2q68g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:dart-wordmark"} {...others} />);
}

export default Component;
