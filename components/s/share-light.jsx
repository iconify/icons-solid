import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp6rlxbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yp6rlxbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:share-light"} {...others} />);
}

export default Component;
