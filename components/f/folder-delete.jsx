import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asoryimij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asoryimij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:folder-delete"} {...others} />);
}

export default Component;
