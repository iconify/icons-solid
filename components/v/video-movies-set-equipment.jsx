import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqxvh-bno.css';
import '../../css/j/jheje3btr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wqxvh-bno"/><path class="jheje3btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:video-movies-set-equipment"} {...others} />);
}

export default Component;
