import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5jqbjbnu.css';
import '../../css/r/rc7uwl0at.css';
import '../../css/e/euv-s5b_k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZLkp2GeZ"><g class="ft5dv1b6b"><path class="a5jqbjbnu"/><path class="rc7uwl0at"/><circle class="euv-s5b_k"/></g></mask></defs><path mask="url(#SVGZLkp2GeZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:duck"} {...others} />);
}

export default Component;
