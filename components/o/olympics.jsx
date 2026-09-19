import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/e/eswa64b5n.css';
import '../../css/u/uuq0x-vfo.css';
import '../../css/r/rrztdhbna.css';
import '../../css/m/m2zlq0bqm.css';
import '../../css/v/vxnys6l0x.css';
import '../../css/p/p36qslvwh.css';
import '../../css/f/fkj5hkbrh.css';
import '../../css/m/m3dpibvkf.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="eswa64b5n"/><path class="uuq0x-vfo"/><path class="rrztdhbna"/><path class="m2zlq0bqm"/><path class="vxnys6l0x"/><path class="p36qslvwh"/><path class="fkj5hkbrh"/><path class="m3dpibvkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:olympics"} {...others} />);
}

export default Component;
