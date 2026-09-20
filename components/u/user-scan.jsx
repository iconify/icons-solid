import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b680p_blz.css';
import '../../css/o/oq-b65kyl.css';
import '../../css/h/hipat9bbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b680p_blz"/><path clip-rule="evenodd" class="oq-b65kyl"/><path class="hipat9bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-scan"} {...others} />);
}

export default Component;
