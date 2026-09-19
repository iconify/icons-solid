import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fqzg-n1xw.css';
import '../../css/w/wekuv1b2d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0V93Schu"><g class="v3_i3wktz"><path class="fqzg-n1xw"/><path class="wekuv1b2d"/></g></mask></defs><path mask="url(#SVG0V93Schu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:zoom-internal"} {...others} />);
}

export default Component;
