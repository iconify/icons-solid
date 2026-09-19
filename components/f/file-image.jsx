import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd6c9-4-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hd6c9-4-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:file-image"} {...others} />);
}

export default Component;
