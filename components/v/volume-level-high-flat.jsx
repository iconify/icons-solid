import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wajbq265d.css';
import '../../css/b/bfz916y2c.css';
import '../../css/u/u00y9gbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wajbq265d"/><path clip-rule="evenodd" class="bfz916y2c"/><path class="u00y9gbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:volume-level-high-flat"} {...others} />);
}

export default Component;
