import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3vefubig.css';
import '../../css/k/ku608vbgm.css';
import '../../css/u/uhho6ibcr.css';
import '../../css/k/k62t2mcjl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCL1YCbGf"><g class="ft5dv1b6b"><path class="f3vefubig"/><path class="ku608vbgm"/><circle class="uhho6ibcr"/><circle class="k62t2mcjl"/></g></mask></defs><path mask="url(#SVGCL1YCbGf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:remote-control-one"} {...others} />);
}

export default Component;
