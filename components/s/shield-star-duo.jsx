import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p89-jwwae.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/i/i2qf3lzja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p89-jwwae secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="i2qf3lzja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-star-duo"} {...others} />);
}

export default Component;
