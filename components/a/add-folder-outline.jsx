import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5gpxabja.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a5gpxabja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:add-folder-outline"} {...others} />);
}

export default Component;
