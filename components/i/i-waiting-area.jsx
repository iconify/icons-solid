import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mas2u-b0z.css';
import '../../css/u/u2y7rxb9t.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="mas2u-b0z"/><path class="u2y7rxb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-waiting-area"} {...others} />);
}

export default Component;
