import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/eldoky0en.css';
import '../../css/a/ajxep-bpy.css';
import '../../css/t/t2o7igbks.css';
import '../../css/l/l88o00roo.css';
import '../../css/j/jyjk2cs2r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0vB6H9gq"><g class="rohhhzb0l"><rect class="eldoky0en"/><path class="ajxep-bpy"/><circle class="t2o7igbks"/><circle class="l88o00roo"/><path class="jyjk2cs2r"/></g></mask></defs><path mask="url(#SVG0vB6H9gq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:videocamera-one"} {...others} />);
}

export default Component;
