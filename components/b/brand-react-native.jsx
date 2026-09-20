import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4f6x2bln.css';
import '../../css/w/wu4khcc2o.css';
import '../../css/z/z_1tcd5no.css';
import '../../css/n/n70js04ud.css';
import '../../css/t/tlerxfq5c.css';
import '../../css/i/iu8gymcgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o4f6x2bln"/><path class="wu4khcc2o"/><path class="z_1tcd5no"/><path class="n70js04ud"/><path class="tlerxfq5c"/><path class="iu8gymcgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-react-native"} {...others} />);
}

export default Component;
