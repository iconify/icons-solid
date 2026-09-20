import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/b5tneem8u.css';
import '../../css/i/iuirop1hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="b5tneem8u"/><path class="iuirop1hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:badge-favorite-heart-2"} {...others} />);
}

export default Component;
