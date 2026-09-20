import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u332-vb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u332-vb3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:plane-tilt-filled"} {...others} />);
}

export default Component;
