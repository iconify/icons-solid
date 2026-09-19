import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/b/br6_jsqjq.css';
import '../../css/r/roikk85_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="br6_jsqjq"/><path class="roikk85_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:transition-left-solid"} {...others} />);
}

export default Component;
