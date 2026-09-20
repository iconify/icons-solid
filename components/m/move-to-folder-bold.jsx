import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1__tkbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1__tkbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-to-folder-bold"} {...others} />);
}

export default Component;
