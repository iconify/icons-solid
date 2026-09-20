import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwnoa1buf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwnoa1buf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:focus-2-fill"} {...others} />);
}

export default Component;
