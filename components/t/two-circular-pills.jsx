import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v21e8jbhl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v21e8jbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:two-circular-pills"} {...others} />);
}

export default Component;
