import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt6vwsbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rt6vwsbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:attachment-bold"} {...others} />);
}

export default Component;
