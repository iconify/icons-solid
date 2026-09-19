import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pr22v6kld.css';
import '../../css/k/kq0341bef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pr22v6kld"/><path class="kq0341bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-square-05"} {...others} />);
}

export default Component;
