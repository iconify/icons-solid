import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fscgq4lir.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fscgq4lir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:castle-with-spires"} {...others} />);
}

export default Component;
