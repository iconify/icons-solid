import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd_uy6b7c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wd_uy6b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:e-wide-with-arrow-bottom-right"} {...others} />);
}

export default Component;
