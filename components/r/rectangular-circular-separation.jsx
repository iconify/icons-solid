import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i52zvrbop.css';
import '../../css/y/yhpmvvbra.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGviwhKdRv"><g class="v3_i3wktz"><path class="i52zvrbop"/><path class="yhpmvvbra"/></g></mask></defs><path mask="url(#SVGviwhKdRv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rectangular-circular-separation"} {...others} />);
}

export default Component;
