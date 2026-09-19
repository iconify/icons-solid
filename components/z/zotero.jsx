import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1r8mg_ct.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="k1r8mg_ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:zotero"} {...others} />);
}

export default Component;
