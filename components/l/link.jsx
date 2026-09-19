import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/capfaguaf.css';
import '../../css/a/atabikbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="capfaguaf"/><path class="atabikbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:link"} {...others} />);
}

export default Component;
