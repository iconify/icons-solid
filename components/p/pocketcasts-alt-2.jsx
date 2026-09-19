import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xai6cac5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xai6cac5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pocketcasts-alt-2"} {...others} />);
}

export default Component;
