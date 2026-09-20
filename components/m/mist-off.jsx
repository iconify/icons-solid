import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8l6ylz_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8l6ylz_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mist-off"} {...others} />);
}

export default Component;
