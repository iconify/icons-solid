import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm2x8bcyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm2x8bcyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:quote-text"} {...others} />);
}

export default Component;
