import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw6-ov3tm.css';
import '../../css/l/liz26ccin.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lw6-ov3tm"/><path class="liz26ccin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-picture-in-picture-active"} {...others} />);
}

export default Component;
