import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d79_wtv7f.css';
import '../../css/v/v71narb8t.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSPencil0"><g class="ft5dv1b6b"><g clip-path="url(#ipSPencil1)" class="d79_wtv7f"><path class="v71narb8t"/></g><defs><clipPath id="ipSPencil1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSPencil0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pencil"} {...others} />);
}

export default Component;
