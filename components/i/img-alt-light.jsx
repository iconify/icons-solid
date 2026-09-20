import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/j/jwum6hb4u.css';
import '../../css/b/bakchowuc.css';
import '../../css/y/y_fwr5blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="jwum6hb4u"/><path class="bakchowuc"/><path class="y_fwr5blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-alt-light"} {...others} />);
}

export default Component;
