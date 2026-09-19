import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4ghfu6yc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c4ghfu6yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:linux-mint"} {...others} />);
}

export default Component;
