import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpp4bbb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpp4bbb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-2x3-sharp"} {...others} />);
}

export default Component;
