import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbx2edc6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xbx2edc6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:play-btn"} {...others} />);
}

export default Component;
