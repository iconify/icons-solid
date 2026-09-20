import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnd3e8bsq.css';
import '../../css/n/nbvb_s3uu.css';
import '../../css/l/lke2lsb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vnd3e8bsq"/><path class="nbvb_s3uu"/><path class="lke2lsb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-focus-outline"} {...others} />);
}

export default Component;
