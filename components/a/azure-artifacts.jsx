import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuqln7d3y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kuqln7d3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:azure-artifacts"} {...others} />);
}

export default Component;
