import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c210f-7ji.css';
import '../../css/i/i9l7_bcpm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="c210f-7ji"/><path class="i9l7_bcpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:labor-delivery"} {...others} />);
}

export default Component;
