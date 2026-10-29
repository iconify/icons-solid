import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htfk-0bug.css';
import '../../css/u/u_em3xrxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htfk-0bug"/><path class="u_em3xrxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bluetooth"} {...others} />);
}

export default Component;
