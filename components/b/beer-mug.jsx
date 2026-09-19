import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/p2xwiqh_v.css';
import '../../css/x/xzxsc8bqh.css';
import '../../css/t/tvpmmp2in.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOUJQzbCo"><g class="v3_i3wktz"><path class="p2xwiqh_v"/><path class="xzxsc8bqh"/><path class="tvpmmp2in"/></g></mask></defs><path mask="url(#SVGOUJQzbCo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:beer-mug"} {...others} />);
}

export default Component;
