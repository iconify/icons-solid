import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpti6ab8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpti6ab8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-chevron-left-filled"} {...others} />);
}

export default Component;
