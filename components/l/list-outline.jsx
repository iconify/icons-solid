import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx7pr52qg.css';
import '../../css/x/xpexa2b0b.css';
import '../../css/j/jinb6ibrg.css';
import '../../css/d/doz_8wbio.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bx7pr52qg"/><circle class="xpexa2b0b"/><circle class="jinb6ibrg"/><circle class="doz_8wbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:list-outline"} {...others} />);
}

export default Component;
