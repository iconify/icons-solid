import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/roeig9o6s.css';
import '../../css/o/of0mpbbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="roeig9o6s"/><path class="of0mpbbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:basketball"} {...others} />);
}

export default Component;
