import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q2mxh1a-z.css';
import '../../css/v/v0hedxxju.css';
import '../../css/o/oj2enabfd.css';
import '../../css/c/cuwcasbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q2mxh1a-z"/><path class="v0hedxxju"/><path class="oj2enabfd"/><path class="cuwcasbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fog-duotone"} {...others} />);
}

export default Component;
