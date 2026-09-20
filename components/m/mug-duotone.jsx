import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ygr4kzk5x.css';
import '../../css/w/wbvi0ucwi.css';
import '../../css/v/vg6w0cbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ygr4kzk5x"/><path clip-rule="evenodd" class="wbvi0ucwi"/><path class="vg6w0cbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mug-duotone"} {...others} />);
}

export default Component;
