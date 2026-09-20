import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdvkx2b8r.css';
import '../../css/g/g5el1zaty.css';
import '../../css/u/uuo1u8bhc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rdvkx2b8r"/><path class="g5el1zaty"/><path class="uuo1u8bhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:pen-brush"} {...others} />);
}

export default Component;
