import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dbvdidk1n.css';
import '../../css/u/unoxn64my.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="dbvdidk1n"/><path class="unoxn64my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smartwatch-favorite-heart-1"} {...others} />);
}

export default Component;
