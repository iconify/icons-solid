import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n45vuo57q.css';
import '../../css/s/spjy6sbgm.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n45vuo57q"/><path clip-rule="evenodd" class="spjy6sbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:photo-camera-16"} {...others} />);
}

export default Component;
