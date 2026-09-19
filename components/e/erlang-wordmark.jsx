import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1w5x4bwa.css';
import '../../css/x/x46jw6bcn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="b1w5x4bwa"/><path class="x46jw6bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:erlang-wordmark"} {...others} />);
}

export default Component;
