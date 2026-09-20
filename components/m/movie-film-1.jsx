import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr-t15b8u.css';
import '../../css/b/btuh9ebju.css';
import '../../css/x/xr4quhb_p.css';
import '../../css/d/dcoz8qizh.css';
import '../../css/h/hx2gzfbxf.css';
import '../../css/j/j75kaehfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nr-t15b8u"/><path class="btuh9ebju"/><path class="xr4quhb_p"/><path class="dcoz8qizh"/><path class="hx2gzfbxf"/><path class="j75kaehfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:movie-film-1"} {...others} />);
}

export default Component;
