import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jzb3v_12p.css';
import '../../css/u/upfqr38kf.css';
import '../../css/i/ip9rf3bsv.css';
import '../../css/x/xfkdr6b7l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGy38Vyesv"><g class="ufeehvblu"><path class="jzb3v_12p"/><path class="upfqr38kf"/><path class="ip9rf3bsv"/><path class="xfkdr6b7l"/></g></mask></defs><path mask="url(#SVGy38Vyesv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:slide"} {...others} />);
}

export default Component;
