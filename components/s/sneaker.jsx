import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c27ftpu8b.css';
import '../../css/b/blxwk5baf.css';
import '../../css/j/jx7pq2b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c27ftpu8b"/><path class="blxwk5baf"/><path class="jx7pq2b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sneaker"} {...others} />);
}

export default Component;
