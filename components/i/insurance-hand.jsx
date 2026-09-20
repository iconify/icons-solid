import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6upunlfr.css';
import '../../css/b/b1y2drbir.css';
import '../../css/t/thd_4qb3d.css';
import '../../css/v/vohphgbml.css';
import '../../css/t/t1x9jzgct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z6upunlfr"/><path class="b1y2drbir"/><path class="thd_4qb3d"/><path class="vohphgbml"/><path class="t1x9jzgct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:insurance-hand"} {...others} />);
}

export default Component;
