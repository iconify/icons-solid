import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gr1__7lov.css';
import '../../css/h/h43ue-8no.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUpRmCb0d"><g class="v3_i3wktz"><path class="gr1__7lov"/><path class="h43ue-8no"/></g></mask></defs><path mask="url(#SVGUpRmCb0d)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:copy"} {...others} />);
}

export default Component;
