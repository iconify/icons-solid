import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3yt24v5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3yt24v5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:stop-line"} {...others} />);
}

export default Component;
