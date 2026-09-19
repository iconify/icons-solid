import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef6n7ybih.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ef6n7ybih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:faunadb-wordmark"} {...others} />);
}

export default Component;
