import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2cclbc5c.css';
import '../../css/s/sym4x4b5v.css';
import '../../css/f/fw-vshkfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b2cclbc5c"/><path clip-rule="evenodd" class="sym4x4b5v"/><path class="fw-vshkfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:passport-duotone"} {...others} />);
}

export default Component;
