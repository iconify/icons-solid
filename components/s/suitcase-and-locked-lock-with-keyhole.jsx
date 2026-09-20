import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziaf69b8f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ziaf69b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:suitcase-and-locked-lock-with-keyhole"} {...others} />);
}

export default Component;
