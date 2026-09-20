import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncg7hj_sr.css';
import '../../css/p/ptfkkxbvh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ncg7hj_sr"/><path class="ptfkkxbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-film-player"} {...others} />);
}

export default Component;
