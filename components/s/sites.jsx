import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0xak7bzd.css';
import '../../css/v/vqpagmb7q.css';
import '../../css/g/gzmbm5zua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect vector-effect="non-scaling-stroke" class="i0xak7bzd"/><rect vector-effect="non-scaling-stroke" class="vqpagmb7q"/><rect vector-effect="non-scaling-stroke" class="gzmbm5zua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:sites"} {...others} />);
}

export default Component;
