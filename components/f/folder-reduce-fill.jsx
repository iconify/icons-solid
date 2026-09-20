import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow_z9l4da.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow_z9l4da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:folder-reduce-fill"} {...others} />);
}

export default Component;
