import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ena8s0kok.css';
import '../../css/p/pq5jkpu9i.css';
import '../../css/k/ka0qx0bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ena8s0kok"/><path class="pq5jkpu9i"/><circle class="ka0qx0bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-variable-front"} {...others} />);
}

export default Component;
