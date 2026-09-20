import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av1mmm5yj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="av1mmm5yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-alert-fill"} {...others} />);
}

export default Component;
