import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db0z5or4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="db0z5or4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cloud-solid"} {...others} />);
}

export default Component;
