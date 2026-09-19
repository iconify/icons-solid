import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uff4gd80n.css';
import '../../css/k/kgcmrhbgu.css';
import '../../css/t/ty89t8tks.css';
import '../../css/u/ucgj1ipte.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJzyaoc0K"><g class="ft5dv1b6b"><path class="uff4gd80n"/><path class="kgcmrhbgu"/><path class="ty89t8tks"/><path class="ucgj1ipte"/></g></mask></defs><path mask="url(#SVGJzyaoc0K)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:waterpolo-one"} {...others} />);
}

export default Component;
