import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn1vqfd2n.css';
import '../../css/r/r4tc83xlk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yn1vqfd2n"/><path class="r4tc83xlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-epdf"} {...others} />);
}

export default Component;
