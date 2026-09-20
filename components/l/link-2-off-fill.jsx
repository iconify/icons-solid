import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb-4nob7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sb-4nob7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:link-2-off-fill"} {...others} />);
}

export default Component;
