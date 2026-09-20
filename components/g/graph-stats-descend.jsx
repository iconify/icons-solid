import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm5k-lblf.css';
import '../../css/z/z2fjp4bxj.css';
import '../../css/w/wrp93a_gz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lm5k-lblf"/><path class="z2fjp4bxj"/><path class="wrp93a_gz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:graph-stats-descend"} {...others} />);
}

export default Component;
