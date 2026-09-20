import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxh981b4t.css';
import '../../css/u/u6yjlmd_g.css';
import '../../css/s/sr7xzcctw.css';
import '../../css/u/uq0v4bclf.css';
import '../../css/b/bbn2yli6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxh981b4t"/><path class="u6yjlmd_g"/><path class="sr7xzcctw"/><path class="uq0v4bclf"/><path class="bbn2yli6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:picture-polaroid-2"} {...others} />);
}

export default Component;
