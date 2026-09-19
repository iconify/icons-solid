import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0tjn895r.css';
import '../../css/n/nwz75bygh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0tjn895r"/><path class="nwz75bygh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:building-house"} {...others} />);
}

export default Component;
