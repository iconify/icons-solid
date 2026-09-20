import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmji0zbni.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kmji0zbni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:creative-commons-bold"} {...others} />);
}

export default Component;
