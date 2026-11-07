import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw0niobhd.css';
import '../../css/i/iltuah3xd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jw0niobhd"/><path class="iltuah3xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-forward-bold"} {...others} />);
}

export default Component;
