import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/ol2q0bijy.css';
import '../../css/j/j2n4kybwy.css';
import '../../css/e/ejxs69auf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0otHQdzY"><g class="ufeehvblu"><rect class="ol2q0bijy"/><path class="j2n4kybwy"/><path class="ejxs69auf"/></g></mask></defs><path mask="url(#SVG0otHQdzY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:unlock"} {...others} />);
}

export default Component;
