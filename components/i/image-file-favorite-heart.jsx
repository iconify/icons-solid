import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcmk3ob6k.css';
import '../../css/a/asbkpqbto.css';
import '../../css/u/ur638acwb.css';
import '../../css/d/dmy1n0vpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gcmk3ob6k"/><path class="asbkpqbto"/><path class="ur638acwb"/><path class="dmy1n0vpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:image-file-favorite-heart"} {...others} />);
}

export default Component;
