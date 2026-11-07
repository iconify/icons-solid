import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuv2pzbjk.css';
import '../../css/b/b2f0rdb6m.css';
import '../../css/l/lmwlcacsv.css';
import '../../css/x/xp8rjqbem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fuv2pzbjk"/><path class="b2f0rdb6m"/><path class="lmwlcacsv"/><path class="xp8rjqbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-add-bold-duotone"} {...others} />);
}

export default Component;
