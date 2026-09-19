import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i2bbc8w.css';
import '../../css/r/rvl8hqvnj.css';
import '../../css/q/qhb4jfb5g.css';
import '../../css/q/qhtreac6e.css';
import '../../css/r/rf7rbhbsd.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSStretching0"><g class="ft5dv1b6b"><g clip-path="url(#ipSStretching1)" class="a4i2bbc8w"><path class="rvl8hqvnj"/><path class="qhb4jfb5g"/><path class="qhtreac6e"/><path class="rf7rbhbsd"/></g><defs><clipPath id="ipSStretching1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSStretching0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stretching"} {...others} />);
}

export default Component;
