import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0llrhkep.css';
import '../../css/p/pbyqebu6j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b0llrhkep"/><path class="pbyqebu6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:photo-camera-crossed-32"} {...others} />);
}

export default Component;
