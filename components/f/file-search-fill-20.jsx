import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5nfh-t8z.css';
import '../../css/g/gzx0z1m6h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5nfh-t8z"/><path class="gzx0z1m6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-search-fill-20"} {...others} />);
}

export default Component;
