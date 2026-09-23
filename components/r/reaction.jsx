import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ytlnqnvjr.css';
import '../../css/i/izakys4nx.css';
import '../../css/o/o1e5bsb1v.css';
import '../../css/b/btuxjnb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ytlnqnvjr"/><path vector-effect="non-scaling-stroke" class="izakys4nx"/><circle vector-effect="non-scaling-stroke" class="o1e5bsb1v"/><circle vector-effect="non-scaling-stroke" class="btuxjnb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:reaction"} {...others} />);
}

export default Component;
