import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj62jbb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jj62jbb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:funnel-fill"} {...others} />);
}

export default Component;
