import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i778ovvzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i778ovvzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:sonos-bookshelf-vertical"} {...others} />);
}

export default Component;
