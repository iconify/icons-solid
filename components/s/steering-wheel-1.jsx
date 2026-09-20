import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/udvi-tzup.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/u/u-ms5ccwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="udvi-tzup"/><path class="crcwzxbsf"/><path class="u-ms5ccwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:steering-wheel-1"} {...others} />);
}

export default Component;
