import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdp6b9bom.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rdp6b9bom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:checklist-boxes-16-solid"} {...others} />);
}

export default Component;
