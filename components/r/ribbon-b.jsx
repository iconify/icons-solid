import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxxj4et5j.css';
import '../../css/g/gn_ky95ky.css';
import '../../css/b/bc6mt2bvs.css';
import '../../css/j/jwzr-db4i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxxj4et5j"/><path class="gn_ky95ky"/><g><path class="bc6mt2bvs"/><path class="jwzr-db4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ribbon-b"} {...others} />);
}

export default Component;
