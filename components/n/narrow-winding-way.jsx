import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4sy2kbzg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j4sy2kbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:narrow-winding-way"} {...others} />);
}

export default Component;
