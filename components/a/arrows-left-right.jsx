import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klsc_6f6f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="klsc_6f6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrows-left-right"} {...others} />);
}

export default Component;
