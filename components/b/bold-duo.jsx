import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd8-j02fc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xigu7d-fq.css';
import '../../css/d/dg8dgkb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fd8-j02fc secondary"/><g class="dt0cm9dhy primary"><path class="xigu7d-fq"/><path class="dg8dgkb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bold-duo"} {...others} />);
}

export default Component;
