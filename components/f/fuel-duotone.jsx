import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aud6xjhme.css';
import '../../css/y/yv7cvsqco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aud6xjhme"/><path class="yv7cvsqco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fuel-duotone"} {...others} />);
}

export default Component;
