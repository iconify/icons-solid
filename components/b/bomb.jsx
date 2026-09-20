import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bnemlnb0q.css';
import '../../css/g/g9gg9li_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="bnemlnb0q"/><path class="g9gg9li_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bomb"} {...others} />);
}

export default Component;
