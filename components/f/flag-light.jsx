import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-x_9nb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f-x_9nb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:flag-light"} {...others} />);
}

export default Component;
