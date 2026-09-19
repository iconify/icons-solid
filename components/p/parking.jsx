import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/frs-1pvcu.css';
import '../../css/r/r77yemz5v.css';
import '../../css/e/edhf98bll.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYAahXcmP"><g class="v3_i3wktz"><path class="frs-1pvcu"/><path class="r77yemz5v"/><path class="edhf98bll"/></g></mask></defs><path mask="url(#SVGYAahXcmP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:parking"} {...others} />);
}

export default Component;
