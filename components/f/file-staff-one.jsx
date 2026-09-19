import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/smvgv0b2x.css';
import '../../css/b/buqc3kb8r.css';
import '../../css/i/im-kzebzv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="smvgv0b2x"/><circle class="buqc3kb8r"/><path class="im-kzebzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-staff-one"} {...others} />);
}

export default Component;
