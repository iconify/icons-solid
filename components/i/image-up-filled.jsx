import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcdm4-b9o.css';
import '../../css/n/nc20dabau.css';
import '../../css/i/i2zatytzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fcdm4-b9o"/><path class="nc20dabau"/><path class="i2zatytzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:image-up-filled"} {...others} />);
}

export default Component;
