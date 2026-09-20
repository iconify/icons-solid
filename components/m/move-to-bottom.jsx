import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy_atxbrp.css';
import '../../css/x/xme0e-kft.css';
import '../../css/e/ectuer5fu.css';
import '../../css/d/d1andrjya.css';
import '../../css/z/z_x2wac6j.css';
import '../../css/d/dduoptbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yy_atxbrp"/><path class="xme0e-kft"/><path class="ectuer5fu"/><path class="d1andrjya"/><path class="z_x2wac6j"/><path class="dduoptbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:move-to-bottom"} {...others} />);
}

export default Component;
