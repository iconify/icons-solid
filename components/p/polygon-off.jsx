import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu9ysfb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu9ysfb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:polygon-off"} {...others} />);
}

export default Component;
