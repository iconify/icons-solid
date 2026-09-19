import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tp_-sbc1k.css';
import '../../css/e/eeqboeb7g.css';
import '../../css/x/x46glnb9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYX7p8bBS"><g class="v3_i3wktz"><path class="tp_-sbc1k"/><path class="eeqboeb7g"/><path class="x46glnb9j"/></g></mask></defs><path mask="url(#SVGYX7p8bBS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:video"} {...others} />);
}

export default Component;
