import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vskh41bae.css';
import '../../css/y/y_g1oe_0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vskh41bae"/><path class="y_g1oe_0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:question"} {...others} />);
}

export default Component;
