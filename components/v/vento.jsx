import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv5zpjb7q.css';
import '../../css/z/zpye_6bpo.css';
import '../../css/c/cq1cnpxnw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nv5zpjb7q"/><path class="zpye_6bpo"/><path class="cq1cnpxnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vento"} {...others} />);
}

export default Component;
