import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zdwx4vbyv.css';
import '../../css/f/fb7tt3bwa.css';
import '../../css/y/y2c2-62wz.css';
import '../../css/a/ardruxc_j.css';
import '../../css/j/j71loib8n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGm41PbbYs"><g class="s9cl3zbei"><path class="zdwx4vbyv"/><circle class="fb7tt3bwa"/><path class="y2c2-62wz"/><path class="ardruxc_j"/><path class="j71loib8n"/></g></mask></defs><path mask="url(#SVGm41PbbYs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:air-bike"} {...others} />);
}

export default Component;
