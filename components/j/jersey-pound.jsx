import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iub38o1gs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iub38o1gs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:jersey-pound"} {...others} />);
}

export default Component;
