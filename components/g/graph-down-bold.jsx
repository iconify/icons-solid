import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o53rsb-vu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o53rsb-vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-down-bold"} {...others} />);
}

export default Component;
