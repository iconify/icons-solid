import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gulrh0bmy.css';
import '../../css/z/z-o2jl6ao.css';
import '../../css/r/rg3jykb4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gulrh0bmy"/><path class="z-o2jl6ao"/><path class="rg3jykb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:truenas-core"} {...others} />);
}

export default Component;
