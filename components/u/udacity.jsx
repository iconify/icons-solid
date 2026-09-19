import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdp0fsn3x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qdp0fsn3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:udacity"} {...others} />);
}

export default Component;
