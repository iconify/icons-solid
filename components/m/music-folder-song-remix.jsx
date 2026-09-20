import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzh9wkb2o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dzh9wkb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:music-folder-song-remix"} {...others} />);
}

export default Component;
