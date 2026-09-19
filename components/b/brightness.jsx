import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0futhbix.css';
import '../../css/z/z4a_2z-dy.css';
import '../../css/v/viyy4-bxg.css';
import '../../css/v/v_nzipb8v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgRHZREBd"><g class="ft5dv1b6b"><path class="h0futhbix"/><path class="z4a_2z-dy"/><path clip-rule="evenodd" class="viyy4-bxg"/><path class="v_nzipb8v"/></g></mask></defs><path mask="url(#SVGgRHZREBd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:brightness"} {...others} />);
}

export default Component;
