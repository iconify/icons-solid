import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaoao3b8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iaoao3b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:football-light"} {...others} />);
}

export default Component;
