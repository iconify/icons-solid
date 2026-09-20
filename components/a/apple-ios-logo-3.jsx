import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mccykob8p.css';
import '../../css/e/eudvpqidf.css';
import '../../css/b/bldh4zbdj.css';
import '../../css/n/n1mjhwg_r.css';
import '../../css/z/z17rehu7v.css';
import '../../css/f/f7a76ab-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="mccykob8p"/><path class="eudvpqidf"/><path class="bldh4zbdj"/><path class="n1mjhwg_r"/><path class="z17rehu7v"/><path class="f7a76ab-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-ios-logo-3"} {...others} />);
}

export default Component;
