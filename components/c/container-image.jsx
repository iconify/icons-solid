import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5iso1b0c.css';
import '../../css/u/ul7vggbgf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f5iso1b0c"/><path class="ul7vggbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:container-image"} {...others} />);
}

export default Component;
