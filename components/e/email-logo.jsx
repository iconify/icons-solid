import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hj49fqb2n.css';
import '../../css/z/z2kaxubju.css';
import '../../css/f/f7a06bbbb.css';
import '../../css/t/tz2wjbb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="hj49fqb2n"/><path class="z2kaxubju"/><path class="f7a06bbbb"/><path class="tz2wjbb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:email-logo"} {...others} />);
}

export default Component;
