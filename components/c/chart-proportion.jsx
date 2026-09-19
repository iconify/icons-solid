import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kb3w1gazs.css';
import '../../css/b/b0al4ebio.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8CB7dcHl"><g class="v3_i3wktz"><path class="kb3w1gazs"/><path class="b0al4ebio"/></g></mask></defs><path mask="url(#SVG8CB7dcHl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chart-proportion"} {...others} />);
}

export default Component;
