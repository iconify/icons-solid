import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw7ckupjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rw7ckupjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrow-right-large-duotone"} {...others} />);
}

export default Component;
