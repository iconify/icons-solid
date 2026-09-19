import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwgygxbhr.css';
import '../../css/s/s4iurdf1n.css';
import '../../css/l/li1rn3ywo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwgygxbhr"/><path class="s4iurdf1n"/><path class="li1rn3ywo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-optimization-ai"} {...others} />);
}

export default Component;
