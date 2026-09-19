import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wqbbqwb-i.css';
import '../../css/s/smmhw5v2i.css';
import '../../css/w/w260_6bbu.css';
import '../../css/k/k0kb9p7kx.css';
import '../../css/a/aloxwhb7j.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wqbbqwb-i"/><path class="smmhw5v2i"/><path class="w260_6bbu"/><path class="k0kb9p7kx"/><path class="aloxwhb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:somaliland"} {...others} />);
}

export default Component;
