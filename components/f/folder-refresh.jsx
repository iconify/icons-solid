import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us0mlcc8v.css';
import '../../css/m/mb6i43i-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="us0mlcc8v"/><path class="mb6i43i-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-refresh"} {...others} />);
}

export default Component;
