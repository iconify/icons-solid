import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i2bbc8w.css';
import '../../css/v/vyn2gq-gt.css';
import '../../css/i/i37-xgcps.css';
import '../../css/p/pjz8kwbbc.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSCroissant0"><g class="ft5dv1b6b"><g clip-path="url(#ipSCroissant1)" class="a4i2bbc8w"><path class="vyn2gq-gt"/><path class="i37-xgcps"/><path class="pjz8kwbbc"/></g><defs><clipPath id="ipSCroissant1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSCroissant0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:croissant"} {...others} />);
}

export default Component;
