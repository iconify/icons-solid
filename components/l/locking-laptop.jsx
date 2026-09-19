import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/e8jxhdczm.css';
import '../../css/s/skzye-b9q.css';
import '../../css/p/pwvf6kbgi.css';
import '../../css/j/jh_hxtbax.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3KzmBdke"><g class="v3_i3wktz"><path class="e8jxhdczm"/><path class="skzye-b9q"/><rect class="pwvf6kbgi"/><path class="jh_hxtbax"/></g></mask></defs><path mask="url(#SVG3KzmBdke)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:locking-laptop"} {...others} />);
}

export default Component;
