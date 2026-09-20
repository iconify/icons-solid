import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ojp4_cecj.css';
import '../../css/f/ft0_rxebo.css';
import '../../css/a/asva5pbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="ojp4_cecj"/><path class="ft0_rxebo"/></g><path class="asva5pbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plug-circle-duotone"} {...others} />);
}

export default Component;
