import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/got2f-y_h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="got2f-y_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:axe"} {...others} />);
}

export default Component;
