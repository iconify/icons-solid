import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vya01ab-y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vya01ab-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:deploy-rules"} {...others} />);
}

export default Component;
