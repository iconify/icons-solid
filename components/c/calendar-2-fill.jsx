import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qprw-3b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qprw-3b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:calendar-2-fill"} {...others} />);
}

export default Component;
