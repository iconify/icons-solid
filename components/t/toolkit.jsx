import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ehq94ab3m.css';
import '../../css/e/ewapn8bvm.css';
import '../../css/u/uanaekbsb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKmZ2HFof"><g class="v3_i3wktz"><path class="ehq94ab3m"/><path class="ewapn8bvm"/><path class="uanaekbsb"/></g></mask></defs><path mask="url(#SVGKmZ2HFof)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:toolkit"} {...others} />);
}

export default Component;
