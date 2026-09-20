import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frdzy3b5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frdzy3b5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:file-mark-fill"} {...others} />);
}

export default Component;
