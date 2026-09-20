import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_8dvglkn.css';
import '../../css/g/gjo-eg8gx.css';
import '../../css/r/rqz-hwa9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t_8dvglkn"/><path class="gjo-eg8gx"/><path class="rqz-hwa9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-verdaccio"} {...others} />);
}

export default Component;
