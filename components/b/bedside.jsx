import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g9no8wbdz.css';
import '../../css/r/r2xc_4bjr.css';
import '../../css/y/ye177abvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAYFUwb2O"><g class="wwvp95byt"><path class="g9no8wbdz"/><path class="r2xc_4bjr"/><path class="ye177abvk"/></g></mask></defs><path mask="url(#SVGAYFUwb2O)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bedside"} {...others} />);
}

export default Component;
