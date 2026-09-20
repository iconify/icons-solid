import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccaahidjq.css';
import '../../css/f/fwdp9bc6y.css';
import '../../css/n/nhny52bzl.css';
import '../../css/y/ybvayg3ql.css';
import '../../css/r/r1qckhbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ccaahidjq"/><path class="fwdp9bc6y"/><path clip-rule="evenodd" class="nhny52bzl"/><path class="ybvayg3ql"/><path class="r1qckhbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-library-bold"} {...others} />);
}

export default Component;
