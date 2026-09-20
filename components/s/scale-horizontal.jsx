import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2bc8ac_f.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_xu3_bfs.css';
import '../../css/p/py10k9b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGA9GA4JbJ" width="22" height="22" x="1" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="s2bc8ac_f"/></mask><g mask="url(#SVGA9GA4JbJ)" class="ft5dv1b6b"><path class="z_xu3_bfs"/><path class="py10k9b2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:scale-horizontal"} {...others} />);
}

export default Component;
