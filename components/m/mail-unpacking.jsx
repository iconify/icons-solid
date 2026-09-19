import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gt-mihb7i.css';
import '../../css/h/hvzd0ubol.css';
import '../../css/m/m43u05b5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGf92m1bHZ"><g class="v3_i3wktz"><path class="gt-mihb7i"/><path class="hvzd0ubol"/><path class="m43u05b5h"/></g></mask></defs><path mask="url(#SVGf92m1bHZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mail-unpacking"} {...others} />);
}

export default Component;
