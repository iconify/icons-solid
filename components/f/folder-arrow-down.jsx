import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bck-16bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bck-16bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:folder-arrow-down"} {...others} />);
}

export default Component;
