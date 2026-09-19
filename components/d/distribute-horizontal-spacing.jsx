import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/u/ughwv1b5j.css';
import '../../css/b/bl47i_h6l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEYElucub"><g class="hv130ab-t"><path class="ughwv1b5j"/><path class="bl47i_h6l"/></g></mask></defs><path mask="url(#SVGEYElucub)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:distribute-horizontal-spacing"} {...others} />);
}

export default Component;
