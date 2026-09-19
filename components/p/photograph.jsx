import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgo8x6bpg.css';
import '../../css/a/a7ebtkb2c.css';
import '../../css/p/pzexhzbmt.css';
import '../../css/f/fphtxumqm.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSPhotograph0"><g class="ft5dv1b6b"><g clip-path="url(#ipSPhotograph1)" class="sgo8x6bpg"><path class="a7ebtkb2c"/><path class="pzexhzbmt"/><path class="fphtxumqm"/></g><defs><clipPath id="ipSPhotograph1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSPhotograph0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:photograph"} {...others} />);
}

export default Component;
