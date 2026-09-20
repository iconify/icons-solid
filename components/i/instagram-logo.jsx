import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpqnhmtil.css';
import '../../css/x/x42oxcctk.css';
import '../../css/h/hwh4m4bbc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wpqnhmtil"/><path clip-rule="evenodd" class="x42oxcctk"/><path clip-rule="evenodd" class="hwh4m4bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:instagram-logo"} {...others} />);
}

export default Component;
