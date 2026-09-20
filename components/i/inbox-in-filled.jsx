import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/palcawbql.css';
import '../../css/g/gsx79b0zp.css';
import '../../css/e/e6h2u9bam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="palcawbql"/><path class="gsx79b0zp"/><path class="e6h2u9bam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:inbox-in-filled"} {...others} />);
}

export default Component;
