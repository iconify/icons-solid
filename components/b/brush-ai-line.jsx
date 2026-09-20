import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8s1l7-rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8s1l7-rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:brush-ai-line"} {...others} />);
}

export default Component;
