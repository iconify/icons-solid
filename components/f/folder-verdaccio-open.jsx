import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urkx-c35c.css';
import '../../css/g/gjo-eg8gx.css';
import '../../css/r/rqz-hwa9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="urkx-c35c"/><path class="gjo-eg8gx"/><path class="rqz-hwa9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-verdaccio-open"} {...others} />);
}

export default Component;
