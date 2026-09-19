import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rkrcdf-xu.css';
import '../../css/q/qf59tfblw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIcZXicPl"><g class="v3_i3wktz"><path class="rkrcdf-xu"/><path class="qf59tfblw"/></g></mask></defs><path mask="url(#SVGIcZXicPl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:airplay"} {...others} />);
}

export default Component;
