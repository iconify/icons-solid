import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c61h6ccxp.css';
import '../../css/g/gulam1fal.css';
import '../../css/c/ccqy6rbku.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="c61h6ccxp"/><path class="gulam1fal"/><circle class="ccqy6rbku"/><path class="f86xz6sdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-satellite"} {...others} />);
}

export default Component;
