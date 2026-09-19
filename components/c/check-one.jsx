import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qkvyde2_l.css';
import '../../css/h/h13c8cb6j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBM25vJeV"><g class="v3_i3wktz"><path class="qkvyde2_l"/><path class="h13c8cb6j"/></g></mask></defs><path mask="url(#SVGBM25vJeV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:check-one"} {...others} />);
}

export default Component;
