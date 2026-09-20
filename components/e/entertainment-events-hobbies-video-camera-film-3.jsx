import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj3igacas.css';
import '../../css/c/c8umzkhsx.css';
import '../../css/m/md_y0zbjb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zj3igacas"/><path class="c8umzkhsx"/><path class="md_y0zbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-video-camera-film-3"} {...others} />);
}

export default Component;
