import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry15pac0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ry15pac0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radar-outline"} {...others} />);
}

export default Component;
