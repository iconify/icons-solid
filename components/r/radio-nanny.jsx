import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/z/z2n1m4skg.css';
import '../../css/z/zjgmhkqxf.css';
import '../../css/x/xlw9t-4mj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsJ6YSwta"><g class="hv130ab-t"><path class="z2n1m4skg"/><circle class="zjgmhkqxf"/><path class="xlw9t-4mj"/></g></mask></defs><path mask="url(#SVGsJ6YSwta)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radio-nanny"} {...others} />);
}

export default Component;
