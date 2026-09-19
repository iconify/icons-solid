import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaarv9b2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jaarv9b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:trend-up-fill"} {...others} />);
}

export default Component;
