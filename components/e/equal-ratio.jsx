import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ola1bow.css';
import '../../css/d/dgu0vjb4h.css';
import '../../css/m/maid5dnld.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJjjb3cvt"><g class="ft5dv1b6b"><rect class="v2ola1bow"/><path clip-rule="evenodd" class="dgu0vjb4h"/><path class="maid5dnld"/></g></mask></defs><path mask="url(#SVGJjjb3cvt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:equal-ratio"} {...others} />);
}

export default Component;
