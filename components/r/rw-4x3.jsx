import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rldblp62q.css';
import '../../css/u/uu-w0hiav.css';
import '../../css/o/ov-48jb4u.css';
import '../../css/t/tw9urjbjf.css';
import '../../css/o/ovjgq6z9l.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="rldblp62q"/><path class="uu-w0hiav"/><path class="ov-48jb4u"/><g transform="translate(511 125.4)scale(.66667)"><g id="SVGPMsh0d7b"><path id="SVGAjpHmdCJ" class="tw9urjbjf"/><use width="100%" height="100%" href="#SVGAjpHmdCJ" transform="scale(1 -1)"/></g><use width="100%" height="100%" href="#SVGPMsh0d7b" transform="scale(-1 1)"/><circle class="ovjgq6z9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:rw-4x3"} {...others} />);
}

export default Component;
