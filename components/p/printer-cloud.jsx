import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2arzzbtq.css';
import '../../css/v/vmr632b-k.css';
import '../../css/a/a1l9d2b8y.css';
import '../../css/a/ahklu1bar.css';
import '../../css/t/tzgfmeiov.css';
import '../../css/y/yl3b7dbge.css';
import '../../css/h/hduy6kx8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m2arzzbtq"/><path class="vmr632b-k"/><path class="a1l9d2b8y"/><path class="ahklu1bar"/><path class="tzgfmeiov"/><path class="yl3b7dbge"/><path class="hduy6kx8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:printer-cloud"} {...others} />);
}

export default Component;
