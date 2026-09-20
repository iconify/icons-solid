import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu3wncbjp.css';
import '../../css/q/qa69btbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu3wncbjp"/><path class="qa69btbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:users-crown-light"} {...others} />);
}

export default Component;
