import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m3ok1mbxt.css';
import '../../css/t/t8_-p0a_v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGW8SYSbEt"><g class="ufeehvblu"><path class="m3ok1mbxt"/><path class="t8_-p0a_v"/></g></mask></defs><path mask="url(#SVGW8SYSbEt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:speaker"} {...others} />);
}

export default Component;
