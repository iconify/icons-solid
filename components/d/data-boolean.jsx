import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox9ffzb9n.css';
import '../../css/o/otxlapboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ox9ffzb9n"/><path class="otxlapboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-boolean"} {...others} />);
}

export default Component;
