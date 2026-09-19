import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgy32l41g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qgy32l41g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qtest-wordmark"} {...others} />);
}

export default Component;
