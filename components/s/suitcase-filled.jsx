import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr0pr52nb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pr0pr52nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suitcase-filled"} {...others} />);
}

export default Component;
