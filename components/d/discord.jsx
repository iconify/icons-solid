import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zpg5x16lp.css';
import '../../css/h/hbak2v8ug.css';
import '../../css/c/cwo89ng1f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="zpg5x16lp"/><path class="hbak2v8ug"/><path class="cwo89ng1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:discord"} {...others} />);
}

export default Component;
