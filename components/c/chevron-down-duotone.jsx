import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs1umdg9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cs1umdg9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chevron-down-duotone"} {...others} />);
}

export default Component;
