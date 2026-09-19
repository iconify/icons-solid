import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_2i16b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_2i16b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:echo-dot-4-group"} {...others} />);
}

export default Component;
