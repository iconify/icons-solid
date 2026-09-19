import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m65256bwd.css';
import '../../css/o/o7tliccxe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpSnl274O"><g class="rohhhzb0l"><path class="m65256bwd"/><circle class="o7tliccxe"/></g></mask></defs><path mask="url(#SVGpSnl274O)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:capricornus"} {...others} />);
}

export default Component;
